import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "disket-mono": ["Disket Mono", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        gradient:
          "conic-gradient(from var(--gradient-angle), #d8b4fe, #c084fc, #a855f7, #c084fc, #d8b4fe)",
      },
      animation: {
        // For Card Rotation Gradient
        rotation: "rotation 10s linear infinite",
      },
      keyframes: {
        // For Card Rotation Gradient
        rotation: {
          "0%": { "--gradient-angle": "0deg" },
          "100%": { "--gradient-angle": "360deg" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
