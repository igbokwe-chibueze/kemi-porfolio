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
      keyframes: {
        'move-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'move-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'move-left': 'move-left 1s linear infinite',
        'move-right': 'move-right 1s linear infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;
