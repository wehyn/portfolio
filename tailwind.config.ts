import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f5f5",
        surface: "#ffffff",
        "surface-elevated": "#fafafa",
        border: "rgb(23 23 23 / 0.1)",
        "border-bright": "rgb(23 23 23 / 0.18)",
        accent: "#ff8c17",
        "accent-dim": "#e97808",
        success: "#2d936c",
        "text-primary": "#171717",
        "text-secondary": "#666666",
        "text-muted": "#999999",
      },
      fontFamily: {
        sans: [
          "var(--font-dm-sans)",
          "ui-rounded",
          "SF Pro Rounded",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        display: [
          "var(--font-dm-sans)",
          "ui-rounded",
          "SF Pro Rounded",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 18px 50px rgb(23 23 23 / 0.08)",
        card: "0 12px 30px rgb(23 23 23 / 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
