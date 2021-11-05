import { defineConfig } from 'vite'
import { resolve  } from 'path'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    Components({
      resolvers: IconsResolver({
        prefix: 'icon'  // 替 icon component加上前贅字來區分元件
      }),
    }),
    Icons()
  ],
  build: { // 打包時拆分資料夾
    rollupOptions: {
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name]_${+new Date()}.js`,
        assetFileNames: `assets/[ext]/[name].[ext]`
      },
      input: {
        main: resolve(__dirname, 'index.html')
      },
    }
  }
})
