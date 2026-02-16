import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF9",
        foreground: "#1C1917",
        muted: "#78716C",
        border: "#E7E5E4",
        accent: {
          DEFAULT: "#7C9A92",
          light: "#E8F0EE",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "64rem",
      },
    },
  },
  plugins: [],
};

export default config;
