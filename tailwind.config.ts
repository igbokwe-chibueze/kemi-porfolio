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
        'night-blue': '#0D0C13',
      },
      fontFamily: {
        "monument-grotesk": ["var(--font-monument-grotesk)"],
        "gT-WalsheimPro": ["var(--font-gT-WalsheimPro)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
