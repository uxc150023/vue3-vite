import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from "rollup-plugin-visualizer";
import createVitePlugins from './plugins/index'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: "test.html", //分析图生成的文件名
      open:true //如果存在本地服务端口，将在打包后自动展示
    }),
    createVitePlugins(),
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
