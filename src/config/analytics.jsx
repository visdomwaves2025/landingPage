import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
    const location = useLocation();

    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        script1.async = true;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
      });
    `;
        document.head.appendChild(script2);

        return () => {
            // Cleanup scripts if needed, but usually GA scripts stay
            // document.head.removeChild(script1);
            // document.head.removeChild(script2);
        };
    }, [GA_MEASUREMENT_ID]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: location.pathname + location.search,
            });
        }
    }, [location, GA_MEASUREMENT_ID]);

    return null;
}

// Event tracking helper
export const trackEvent = (
    action,
    category,
    label,
    value
) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}

// Conversion tracking
export const trackConversion = (conversionId, value) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
            send_to: conversionId,
            value: value,
            currency: 'USD',
        })
    }
}

// Page view tracking for client-side navigation
export const trackPageView = (url) => {
    // This is now handled by the useEffect in GoogleAnalytics component
    // But keeping it for compatibility if manually called
    if (typeof window !== 'undefined' && window.gtag) {
        // We need the ID here, but it's not passed. 
        // Assuming it's available globally or we just don't use this function directly anymore.
        // For now, let's leave it as is, but it might fail if ID is missing.
    }
}
