import path from "path"
import { defineConfig } from "vite"
import { terser } from "rollup-plugin-terser"
import copy from "rollup-plugin-copy"
import postcss from "rollup-plugin-postcss"
import postcssUrl from "postcss-url"

import react from "@vitejs/plugin-react"
import img from "rollup-plugin-image"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: path.resolve(__dirname, "index.html"),
  //       config: path.resolve(__dirname, "src/product/second/config.js"),
  //     },
  //     output: {
  //       entryFileNames: `static/[name].js`,
  //       chunkFileNames: `static/[name].js`,
  //       manualChunks: {
  //         config: ["src/product/second/config.js"],
  //         // video: ["src/assets/video/video.js"],
  //       },
  //       assetFileNames: (assetInfo) => {
  //         let folder
  //         if (assetInfo.name.endsWith(".css")) {
  //           folder = "static"
  //         } else if (assetInfo.name.endsWith(".otf")) {
  //           folder = "font"
  //         } else if (assetInfo.name.endsWith(".mp4")) {
  //           return "video/[name][extname]"
  //         } else if (assetInfo.name.endsWith(".gif")) {
  //           return "frame/ani1/[name][extname]"
  //         } else {
  //           folder = "images"
  //           return `images/[name]-[hash][extname]`
  //         }
  //         return `${folder}/[name][extname]`
  //       },
  //     },
  //   },
  // },

  // 不要缓存
  server: {
    fs: {
      strict: false,
    },
  },
})
