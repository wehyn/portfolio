import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080807",
        surface: "#11110f",
        "surface-elevated": "#1a1915",
        border: "#2b2922",
        "border-bright": "#4a4539",
        accent: "#b89a6e",
        "accent-dim": "#927650",
        "text-primary": "#f2efe8",
        "text-secondary": "#aaa69c",
        "text-muted": "#716e67",
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
