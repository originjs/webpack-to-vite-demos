import { defineConfig } from 'vite';
import path from 'path';

import vue from '@vitejs/plugin-vue';

import vueJsx from '@vitejs/plugin-vue-jsx';

import envCompatible from 'vite-plugin-env-compatible';

import { viteCommonjs } from '@originjs/vite-plugin-commonjs';


// https://vitejs.dev/config/
export default defineConfig(
  {
    resolve: {
        alias: [
            {
                find: /^~/,
                replacement: ''
            },
            {
                find: '@',
                replacement: path.resolve(__dirname,'src')
            }
        ],
        extensions: [
            '.mjs',
            '.js',
            '.ts',
            '.jsx',
            '.tsx',
            '.json',
            '.vue'
        ]
    },
    plugins: [
        vue(),
        vueJsx(),
        viteCommonjs(),
        envCompatible()
    ],
    build: {
    }
}
)