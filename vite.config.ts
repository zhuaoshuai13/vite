import path from "path"
import { defineConfig } from "vite"
import copy from "rollup-plugin-copy"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",

  build: {
    assetsInlineLimit: 1,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        chunkFileNames: "static/[name].js",
        entryFileNames: "static/[name].js",
        assetFileNames: (assetInfo) => {
          let folder
          if (assetInfo.name.endsWith(".css")) {
            folder = "static"
            return `${folder}/[name][extname]`
          }
          return "[ext]/[name].[ext]"
        },
      },
      plugins: [
        copy({
          targets: [
            {
              src: path.resolve(__dirname, "src/product/povaEight/config.js"),
              dest: "dist",
            },
            {
              src: path.resolve(__dirname, "src/assets/video/*"),
              dest: "dist/video",
            },
          ],
          hook: "writeBundle",
        }),
      ],
    },
  },

  // 不要缓存
  server: {
    fs: {
      strict: false,
    },
  },
})
