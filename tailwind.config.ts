import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F3F8F9",
        surface: "#FFFFFF",
        "surface-dim": "#E7F0F2",
        ink: {
          DEFAULT: "#121A24",
          soft: "#46525E",
          faint: "#7B8794",
        },
        harbor: {
          400: "#5262C2",
          500: "#32408F",
          600: "#28336E",
          700: "#1D2550",
        },
        mint: {
          300: "#9FE0D2",
          400: "#5CC4AE",
          500: "#2FAE94",
          600: "#238876",
        },
        rose: {
          400: "#F5768A",
          500: "#F2546B",
          600: "#D53B54",
        },
        violet: {
          400: "#AFA3F7",
          500: "#8C7CF0",
        },
        state: {
          success: "#238876",
          error: "#C83B3B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1360px",
      },
      borderRadius: {
        sm: "10px",
        md: "20px",
        lg: "32px",
      },
      boxShadow: {
        panel: "0 24px 60px -24px rgba(18, 26, 36, 0.28)",
        lift: "0 12px 30px -12px rgba(18, 26, 36, 0.22)",
        glow: "0 0 60px -10px rgba(140, 124, 240, 0.35)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "aurora-drift": {
          "0%, 100%": { transform: "translate3d(-4%, -2%, 0) scale(1)" },
          "50%": { transform: "translate3d(4%, 3%, 0) scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "aurora-drift": "aurora-drift 22s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
