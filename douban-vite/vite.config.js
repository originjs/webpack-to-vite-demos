import { defineConfig } from 'vite';
import path from 'path';
import { createVuePlugin } from 'vite-plugin-vue2';
import envCompatible from 'vite-plugin-env-compatible';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';


// https://vitejs.dev/config/
export default defineConfig(
  {
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname,'src')
            },
            {
                find: 'vue',
                replacement: path.resolve(__dirname,'node_modules/vue/dist/vue.common.js')
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
        createVuePlugin({jsx:true}),
        viteCommonjs(),
        envCompatible()
    ],
    build: {
        rollupOptions: {
            input: {
                app0: './build/dev-client',
                app1: './src/main.js'
            }
        },
        outDir: path.resolve(__dirname, 'dist')
    },
    define: {
        'process.env': {
            NODE_ENV: '"development"'
        }
    }
}
)