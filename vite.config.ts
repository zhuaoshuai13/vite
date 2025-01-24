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
        chunkFileNames: "js/[name].js",
        entryFileNames: "js/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return `css/[name][extname]`
          } else if (assetInfo.name.endsWith(".woff2")) {
            return "fonts/[name].[ext]"
          } else if (
            assetInfo.name.endsWith(".jpg") ||
            assetInfo.name.endsWith(".png") ||
            assetInfo.name.endsWith(".webp")
          ) {
            return "images/[name].[ext]"
          }
          return "[ext]/[name].[ext]"
        },
      },
      plugins: [
        copy({
          targets: [
            {
              src: "src/product/s25ultraAr/config_ar.js",
              dest: "dist/js",
            },
            {
              src: "src/assets/s25ultra/images/*",
              dest: "dist/images",
            },
            {
              src: "src/assets/s25ultra/videos/*",
              dest: "dist/videos",
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
    host: '0.0.0.0',
    proxy: {
      "/picker": {
        // target: "https://cnm2wwwuat.dyson.cn",
        target: "https://dysondev.mez100.com.cn",
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/rest/, ""),
      },
    },
  },
})