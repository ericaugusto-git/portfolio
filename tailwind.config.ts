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
        'comment-grey': '#595959',
        'function': '#4CE470'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dots": "linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space), linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space), var(--dot-color)",
      },
      background: {
      },
      fontFamily: {
        code: ['var(--font-ibm)', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
        // Setting a default font-family
      },
      keyframes: {
        fadeIn: {
          'from': {
            opacity: '0',
            transform: 'translate3d(0, -20%, 0)',
          },
          'to': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      }
    },
  },
  plugins: [],
};
export default config;
