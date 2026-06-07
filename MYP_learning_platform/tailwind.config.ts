import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background:    "var(--background)",
        foreground:    "var(--foreground)",
        "brand-navy":  "var(--brand-navy)",
        "brand-red":   "var(--brand-red)",
        "brand-steel": "var(--brand-steel)",
        "brand-dark":  "var(--brand-dark)",
        "brand-mint":  "var(--brand-mint)",
        /* legacy aliases */
        "ib-blue":   "var(--ib-blue)",
        "ib-teal":   "var(--ib-teal)",
        "ib-teal-l": "var(--ib-teal-l)",
        "ib-green":  "var(--ib-green)",
        "ib-amber":  "var(--ib-amber)",
        "ib-red":    "var(--ib-red)",
      },
      fontFamily: {
        sans: ["var(--font-source-sans)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "'Courier New'", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
