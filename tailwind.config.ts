import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
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
        'comment-grey': '#595959',
        'function': '#4CE470'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      background: {
      },
      fontFamily: {
        code: ['var(--font-ibm)', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
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
        'text-slide': 'text-slide 1s cubic-bezier(0.83, 0, 0.17, 1)',
      }
    },
  },
  plugins: [],
};
export default config;
