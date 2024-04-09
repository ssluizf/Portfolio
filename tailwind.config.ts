import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["var(--font-roboto)"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#131313",
      "dark-gray": "#1E1E1E",
      white: "#FFFFFF",
      green: "#29B51E",
      "dark-green": "#209021",
    },
  },
  plugins: [],
}
export default config
