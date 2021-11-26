import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { createWebHashHistory } from 'vue-router'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    
    // buildDir: process.env.NODE_ENV === 'production'
    // ? '/The_F2E_3RD_2021_Taiwan_tourist_attractions/'
    // : '/'
})

// module.exports = {

//   }