import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090c",
        surface: "#101217",
        "surface-elevated": "#171a21",
        border: "#242833",
        "border-bright": "#3a4050",
        accent: "#a996ff",
        "accent-dim": "#8b8cff",
        "text-primary": "#f7f8f8",
        "text-secondary": "#a8adb7",
        "text-muted": "#687080",
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
