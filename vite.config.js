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
    },

    base: process.env.NODE_ENV === 'production'?'/The_F2E_3RD_2021_Taiwan_tourist_attractions/':'/'
    
    // buildDir: process.env.NODE_ENV === 'production'
    // ? '/The_F2E_3RD_2021_Taiwan_tourist_attractions/'
    // : '/'
})

// module.exports = {

//   }