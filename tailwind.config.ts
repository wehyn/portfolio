import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0c0b0a",
        surface: "#131110",
        "surface-elevated": "#1a1816",
        border: "#222020",
        "border-bright": "#2e2b28",
        accent: "#b89a6e",
        "accent-dim": "#9e845c",
        "text-primary": "#edeae4",
        "text-secondary": "#605c57",
        "text-muted": "#26231f",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
