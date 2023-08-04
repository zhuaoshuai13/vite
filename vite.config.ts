import path from "path"
import { defineConfig } from "vite"
import { terser } from "rollup-plugin-terser"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        config: path.resolve(__dirname, "src/product/second/config.js"),
      },
      output: {
        entryFileNames: `code/[name].js`,
        chunkFileNames: `code/[name].js`,
        manualChunks: {
          utils: ["src/product/second/config.js"],
        },
        assetFileNames: (assetInfo) => {
          let folder = "code"

          if (assetInfo.name.endsWith(".css")) {
            folder = "code"
          } else if (assetInfo.name.endsWith(".otf")) {
            folder = "font"
          } else {
            folder = "images"
            return `images/[name]-[hash][extname]`
          }

          return `${folder}/[name][extname]`
        },
      },
    },
  },

  // 不要缓存
  server: {
    fs: {
      strict: false,
    },
  },
})
