import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors (from design-system-specifications.md)
        primary: {
          navy: "#154360",
          blue: "#0073CF",
          purple: "#8E4585",
        },
        // Additional colors from visdomwaves-website-requirements.md
        brand: {
          deepBlue: "#003D7A",
          vibrantTeal: "#00B4D8",
          charcoal: "#2C3E50",
          lightGray: "#F7F9FA",
          successGreen: "#27AE60",
        },
        // Neutral colors
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        heading: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        body: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
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
        "fade-in": "fadeIn 0.2s ease-in-out",
        "fade-up": "fadeUp 0.3s ease-out",
        "slide-in": "slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "scale-in": "scaleIn 0.2s ease-out",
        "loading": "loading 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        loading: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
