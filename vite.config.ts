import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import svgLoader from 'vite-svg-loader';
import path from 'path';

export default defineConfig({
    plugins: [
        tailwindcss(),
        vue(),
        svgLoader(),
    ],
    base: '/cv/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
