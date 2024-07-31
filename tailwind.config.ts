import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'betterhover': {'raw': '(hover: hover)'},
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
      'sm': {'max': '639px'},
      'xs': {'max': '530px'},
      'xxs': {'max': '320px'},
      'circles': {'max': '400px'},
      'four': {'max': '1423px'},
      'five': {'max': '1369px'},

      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        'comment-grey': '#7A7A7A',
        'comment-grey-darker': '#47494a',
        'function': '#4CE470',
        'accent-orange': '#ff7247'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'box-gradient': 'linear-gradient(62deg, #8ec5fc14 0%, #e0c3fc2e 100%)',
        // 'galaxy-gradient': 'linear-gradient(267deg, #0078d7 0%, #b4a0ff 100%)',
        'galaxy-gradient': 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
        
      },
      background: {
      },
      fontFamily: {
        code: ['var(--font-ibm)', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
        martian: ['var(--font-martian)', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
        // Setting a default font-family
      },
      keyframes: {
        'text-slide': {
          'from': {
            opacity: '0',
            transform: 'translateY(-15%)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0%)',
          },
        },
      },
      animation: {
        'text-slide': 'text-slide 0.3s cubic-bezier(0.83, 0, 0.17, 1)',
      }
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
export default config;
