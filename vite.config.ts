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
          } 
          else if (assetInfo.name.endsWith(".otf")) {
            return "fonts/[name].[ext]"
          } 
          else if (
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
              src: "src/product/spark20proplus/config.js",
              dest: "dist/js",
            },
            {
              src: "src/assets/spark20proplus/images/*",
              dest: "dist/images",
            },
            {
              src: "src/assets/spark20proplus/videos/*",
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
  },
})


// import path from "path"
// import { defineConfig } from "vite"
// import copy from "rollup-plugin-copy"
// import react from "@vitejs/plugin-react"

// export default defineConfig({
//   plugins: [react()],
//   base: "./",

//   build: {
//     assetsInlineLimit: 1,
//     rollupOptions: {
//       input: {
//         main: path.resolve(__dirname, "index.html"),
//       },
//       output: {
//         chunkFileNames: "static/[name].js",
//         entryFileNames: "static/[name].js",
//         assetFileNames: (assetInfo) => {
//           let folder
//           if (assetInfo.name.endsWith(".css")) {
//             folder = "static"
//             return `${folder}/[name][extname]`
//           }
//           return "[ext]/[name].[ext]"
//         },
//       },
//       plugins: [
//         copy({
//           targets: [
//             {
//               src: "src/product/spark20proplus/config.js",
//               dest: "dist",
//             },
//             {
//               src: "src/assets/video/*",
//               dest: "dist/video",
//             },
//             // {
//             //   src: "src/assets/landAni/*",
//             //   dest: "dist/landAni",
//             // },
//             // {
//             //   src: "src/assets/screenAni/*",
//             //   dest: "dist/screenAni",
//             // },
//           ],
//           hook: "writeBundle",
//         }),
//       ],
//     },
//   },

//   // 不要缓存
//   server: {
//     fs: {
//       strict: false,
//     },
//   },
// })