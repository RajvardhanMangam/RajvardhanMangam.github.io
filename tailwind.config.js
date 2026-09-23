/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A0A0B",
          panel: "#111113",
          panel2: "#18181B",
          line: "#2A2A2E",
        },
        ink: {
          DEFAULT: "#F3F1EA",
          dim: "#9A9A9F",
          faint: "#57575C",
        },
        signal: {
          DEFAULT: "#D8FF3E",
          dim: "#A8C72F",
          glow: "#E8FF8A",
        },
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      fontSize: {
        clamp: "clamp(2.75rem, 8vw, 8.5rem)",
      },
    },
  },
  plugins: [],
};
