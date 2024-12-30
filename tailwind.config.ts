import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: 'class',
  
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "monument-grotesk": ["var(--font-monument-grotesk)"],
        "gT-WalsheimPro": ["var(--font-gT-WalsheimPro)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
