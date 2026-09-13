/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#10141C",
          panel: "#161B25",
          panel2: "#1C2230",
          line: "#2A3140",
        },
        ink: {
          DEFAULT: "#EDEAE1",
          dim: "#9BA3B4",
          faint: "#5C6478",
        },
        signal: {
          DEFAULT: "#E8873A",
          dim: "#B96A2C",
          glow: "#FFB878",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
