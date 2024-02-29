import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
  plugins: [
    react(),
    {
      name: "load-svg",
      enforce: "pre",
      transform(_, id) {
        if (id.endsWith(".svg")) {
          return "export default () => {}"
        }
      },
    },
  ],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
})
