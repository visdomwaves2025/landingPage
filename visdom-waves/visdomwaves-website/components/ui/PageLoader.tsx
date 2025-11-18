"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type LoaderContextValue = {
  start: () => void;
  finish: () => void;
  isActive: boolean;
};

const PageLoaderContext = createContext<LoaderContextValue | null>(null);

export const usePageLoader = () => {
  const context = useContext(PageLoaderContext);
  if (!context) {
    throw new Error("usePageLoader must be used within a PageLoaderProvider");
  }
  return context;
};

type Phase = "idle" | "loading" | "finishing";

export function PageLoaderProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchKey = searchParams?.toString();

  const animationFrame = useRef<number | null>(null);
  const finishTimer = useRef<NodeJS.Timeout | null>(null);
  const pathnameRef = useRef(pathname);
  const searchKeyRef = useRef(searchKey);
  const readyCheckTimer = useRef<NodeJS.Timeout | null>(null);
  const maxLoadTimer = useRef<NodeJS.Timeout | null>(null);
  const phaseRef = useRef<Phase>("idle");
  const finishRef = useRef<(() => void) | null>(null);

  const stopAnimation = () => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
      animationFrame.current = null;
    }
  };

  const clearFinishTimer = () => {
    if (finishTimer.current) {
      clearTimeout(finishTimer.current);
      finishTimer.current = null;
    }
  };

  const clearReadyCheckTimer = () => {
    if (readyCheckTimer.current) {
      clearTimeout(readyCheckTimer.current);
      readyCheckTimer.current = null;
    }
  };

  const clearMaxLoadTimer = () => {
    if (maxLoadTimer.current) {
      clearTimeout(maxLoadTimer.current);
      maxLoadTimer.current = null;
    }
  };

  const finish = useCallback(() => {
    setPhase((current) => {
      if (current === "idle") {
        return current;
      }
      phaseRef.current = "finishing";
      return "finishing";
    });
  }, []);

  // Update finish ref when finish changes
  useEffect(() => {
    finishRef.current = finish;
  }, [finish]);

  const start = useCallback(() => {
    setPhase((current) => {
      if (current === "loading") {
        return current;
      }
      clearFinishTimer();
      clearReadyCheckTimer();
      clearMaxLoadTimer();
      setProgress(0);
      phaseRef.current = "loading";
      
      // Safety timeout - force finish after 3 seconds max
      maxLoadTimer.current = setTimeout(() => {
        if (phaseRef.current === "loading" && finishRef.current) {
          finishRef.current();
        }
      }, 3000);
      
      return "loading";
    });
  }, []);

  // Update phase ref when phase changes
  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  // Progress animation during loading
  useEffect(() => {
    if (phase !== "loading") {
      stopAnimation();
      return;
    }

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      // Faster animation to reach 95% quickly
      const eased = 1 - Math.exp(-elapsed / 200);
      const target = Math.min(95, eased * 95);

      setProgress((prev) => {
        if (prev >= 95) {
          // Keep animating but stay at 95% until page is ready
          animationFrame.current = requestAnimationFrame(animate);
          return 95;
        }
        return Math.max(prev, target);
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      stopAnimation();
    };
  }, [phase]);

  // Finish animation - smoothly go to 100% then fade out
  useEffect(() => {
    if (phase !== "finishing") {
      return;
    }

    stopAnimation();
    clearReadyCheckTimer();
    clearMaxLoadTimer();
    
    // Immediately set to 100%
    setProgress(100);

    // Wait a bit for the transition, then hide
    finishTimer.current = setTimeout(() => {
      setPhase("idle");
      phaseRef.current = "idle";
      setProgress(0);
      finishTimer.current = null;
    }, 300);

    return () => {
      clearFinishTimer();
    };
  }, [phase]);

  // Detect link clicks - start loader immediately
  useEffect(() => {
    const handleInternalLinkClick = (event: MouseEvent) => {
      // Skip if modifier keys or not left click
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      // Skip external links, mailto, tel, and hash links
      if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) {
        return;
      }

      // Start loader immediately
      start();
    };

    document.addEventListener("click", handleInternalLinkClick, true);
    return () => {
      document.removeEventListener("click", handleInternalLinkClick, true);
    };
  }, [start]);

  // Detect programmatic navigation
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    const wrapHistoryMethod =
      (method: typeof window.history.pushState) =>
      (...args: Parameters<typeof window.history.pushState>) => {
        start();
        return method.apply(window.history, args);
      };

    window.history.pushState = wrapHistoryMethod(originalPushState);
    window.history.replaceState = wrapHistoryMethod(originalReplaceState);

    const handlePopState = () => start();
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener("popstate", handlePopState);
    };
  }, [start]);

  // Detect route changes and wait for page to be ready
  useEffect(() => {
    // Check if pathname or search params actually changed
    const pathnameChanged = pathnameRef.current !== pathname;
    const searchChanged = searchKeyRef.current !== searchKey;

    if (pathnameChanged || searchChanged) {
      pathnameRef.current = pathname;
      searchKeyRef.current = searchKey || "";

      // Only finish if we're currently loading
      if (phase === "loading") {
        // Wait for Next.js to render the new page
        clearReadyCheckTimer();
        
        // Use double RAF to ensure DOM is updated
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            readyCheckTimer.current = setTimeout(() => {
              // Check if document is ready and page is interactive
              if (document.readyState === "complete" || document.readyState === "interactive") {
                finish();
              } else {
                // Wait for load event, but with a timeout
                const handleLoad = () => {
                  finish();
                  window.removeEventListener("load", handleLoad);
                };
                window.addEventListener("load", handleLoad);
                
                // Fallback: finish after 500ms even if load doesn't fire
                setTimeout(() => {
                  window.removeEventListener("load", handleLoad);
                  if (phaseRef.current === "loading") {
                    finish();
                  }
                }, 500);
              }
            }, 100); // Small delay to let Next.js start rendering
          });
        });
      }
    }
  }, [pathname, searchKey, phase, finish]);

  const isActive = phase !== "idle";

  const contextValue = useMemo(
    () => ({
      start,
      finish,
      isActive,
    }),
    [start, finish, isActive],
  );

  return (
    <PageLoaderContext.Provider value={contextValue}>
      {children}
      <LoaderOverlay progress={progress} isVisible={isActive} />
    </PageLoaderContext.Provider>
  );
}

type LoaderOverlayProps = {
  progress: number;
  isVisible: boolean;
};

const LoaderOverlay = ({ progress, isVisible }: LoaderOverlayProps) => {
  // Lock body scroll when loader is visible
  useEffect(() => {
    if (isVisible) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Lock body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore scroll position
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isVisible]);

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] transition-opacity duration-300 ${
          isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isVisible}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-primary-blue to-brand-vibrant-teal">
          <div className="absolute inset-0 opacity-50 mix-blend-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(20,20,20,0.25),_transparent_65%)] pointer-events-none" />
        </div>

        <div 
          className="relative z-10 flex h-full flex-col items-center justify-center text-white"
          style={{
            minHeight: '100vh',
            maxHeight: '100vh',
            overflow: 'hidden',
            padding: '1rem',
          }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 max-w-4xl w-full px-4">
            <div className="relative flex h-24 w-24 items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 rounded-full border border-white/20" />
              <div className="absolute inset-3 rounded-full border border-white/30" />
              <div className="absolute inset-0 rounded-full bg-white/10 blur-xl" />
              <div className="relative h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md shadow-lg shadow-black/20">
                <div className="h-full w-full animate-loaderOrbit rounded-2xl bg-gradient-to-tr from-white/90 via-white/60 to-transparent" />
                {/* Logo on top of rotating square */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Image
                    src="/logos/VW_WB.png"
                    alt="VisdomWaves Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain drop-shadow-lg"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm uppercase tracking-[0.4em] text-white/70">Preparing</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-heading font-semibold">VisdomWaves Experience</h2>
              <p className="mt-3 text-sm sm:text-base text-white/80">
                Seamlessly orchestrating the next page with optimized assets and interactions.
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 w-full max-w-[420px] px-4">
            <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-[width] duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
              <div className="absolute inset-0 animate-loaderShimmer bg-[linear-gradient(120deg,_transparent_30%,_rgba(255,255,255,0.9)_50%,_transparent_70%)]" />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs sm:text-sm text-white/80">
              <span>Optimizing content pipeline</span>
              <span className="font-semibold tabular-nums">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 top-0 z-[10000] h-1 origin-left bg-gradient-to-r from-brand-vibrant-teal via-white to-primary-purple transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ 
          transform: `scaleX(${progress / 100})`,
          transformOrigin: 'left center',
        }}
      />
    </>
  );
};


