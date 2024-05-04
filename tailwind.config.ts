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
