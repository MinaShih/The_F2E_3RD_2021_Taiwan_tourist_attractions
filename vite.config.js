import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    }
})

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/eric-project/'
      : '/'
  }