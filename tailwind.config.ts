import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17243b",
        blue: {
          50: "#eff6ff",
          100: "#dceafe",
          500: "#3979e8",
          600: "#2864cc",
          700: "#2052a9",
        },
        paper: "#f7f9fc",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 16px 48px rgba(23, 36, 59, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
