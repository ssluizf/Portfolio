import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      "roboto": ["var(--font-roboto)"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#131313",
      white: "#FFFFFF",
      green: "#29B51E",
      "dark-green": "#209021",
    },
    extend: {
      keyframes: {
        "glitch-hover": {
          "2%, 64%": {
            transform: "translate(2px, 0) skew(0deg)"
          },
          "4%, 60%": {
            transform: "translate(-2px, 0) skew(0deg)"
          },
          "62%": {
            transform: "translate(0, 0) skew(5deg)"
          }
        }
      },
      animation: {
        "glitch-hover": "glitch-hover"
      }
    }
  },
  plugins: [],
}
export default config
