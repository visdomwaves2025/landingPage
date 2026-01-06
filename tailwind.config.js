const typography = require("@tailwindcss/typography");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Brand Colors (Light Theme Revert)
                primary: {
                    navy: "#0f172a", // Slate-900: Dark text color (was background)
                    blue: "#2563EB", // Royal Blue: Primary action color (more visible on white)
                    purple: "#7C3AED", // Violet: Secondary accent
                    white: "#F8FAFC", // Slate-50: Background color (was text)
                },
                // Additional colors
                brand: {
                    deepBlue: "#FFFFFF", // White: Main background (was deepBlue)
                    vibrantTeal: "#0EA5E9", // Sky Blue: Vibrant accent
                    charcoal: "#F1F5F9", // Slate-100: Card background (was charcoal)
                    lightGray: "#64748B", // Slate-500: Secondary text
                    glass: "rgba(255, 255, 255, 0.7)", // Frosted glass for light mode
                },
                // Neutral colors
                neutral: {
                    50: "#F8FAFC",
                    100: "#F1F5F9",
                    200: "#E2E8F0",
                    300: "#CBD5E1",
                    400: "#94A3B8",
                    500: "#64748B",
                    600: "#475569",
                    700: "#334155",
                    800: "#1E293B",
                    900: "#0F172A",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                heading: ["Plus Jakarta Sans", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            fontSize: {
                "display-lg": ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }],
                "display-md": ["3.5rem", { lineHeight: "1.2", fontWeight: "700" }],
                "display-sm": ["2.5rem", { lineHeight: "1.3", fontWeight: "700" }],
                "heading-xl": ["2rem", { lineHeight: "1.4", fontWeight: "600" }],
                "heading-lg": ["1.5rem", { lineHeight: "1.5", fontWeight: "600" }],
                "heading-md": ["1.25rem", { lineHeight: "1.5", fontWeight: "600" }],
                "heading-sm": ["1rem", { lineHeight: "1.5", fontWeight: "600" }],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "fade-up": "fadeUp 0.5s ease-out",
                "slide-in": "slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                "float": "float 3s ease-in-out infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
                "glass-shimmer": "glassShimmer 2s linear infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideIn: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 5px rgba(100, 255, 218, 0.2)" },
                    "100%": { boxShadow: "0 0 20px rgba(100, 255, 218, 0.6), 0 0 10px rgba(189, 52, 254, 0.4)" },
                },
                glassShimmer: {
                    "0%": { backgroundPosition: "200% 0" },
                    "100%": { backgroundPosition: "-200% 0" },
                }
            },
        },
    },
    plugins: [typography],
};
