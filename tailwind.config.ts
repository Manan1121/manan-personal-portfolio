import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        charcoal: {
          DEFAULT: '#333333'
        }
    },
    keyframes: {
      scaleUp: {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.05)' },
      },
    },
    animation: {
      'scale-up': 'scaleUp 3s ease-in-out infinite',
    },
    fontFamily: {
      'helvetica': 'Helvetica, Arial, sans-serif',

    }

  },
  },
  plugins: [],
};
export default config;
