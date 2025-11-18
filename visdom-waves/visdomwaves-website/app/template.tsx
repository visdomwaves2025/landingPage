"use client";

import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    // Start with fade in
    setTransitionStage("fadeIn");
    setDisplayChildren(children);

    // Trigger the fade in after a tiny delay
    const timer = setTimeout(() => {
      setTransitionStage("visible");
      // Scroll to top after transition (not during)
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 10);

    return () => clearTimeout(timer);
  }, [children]);

  return (
    <div
      className={`
        transition-opacity duration-300 ease-in-out
        ${transitionStage === "visible" ? "opacity-100" : "opacity-0"}
      `}
      style={{
        minHeight: '100vh'
      }}
    >
      {displayChildren}
    </div>
  );
}
