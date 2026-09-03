import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F5F0",
        canvasWarm: "#F1ECE2",
        primary: "#173B57",
        secondary: "#6FA9B8",
        warm: "#C47A5A",
        gold: "#D9B56D",
        ink: "#172025",
        cream: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        displayMr: ["var(--font-noto-serif-mr)", "serif"],
        body: ["var(--font-worksans)", "sans-serif"],
        bodyMr: ["var(--font-noto-sans-mr)", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        card: "1.75rem",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 20px 60px -25px rgba(23, 59, 87, 0.35)",
        card: "0 12px 40px -18px rgba(23, 32, 37, 0.22)",
      },
      letterSpacing: {
        tightish: "-0.01em",
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        riseIn: "riseIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
