import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
// vite.config.ts
import Components from 'unplugin-vue-components/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
      ],
      dts: 'types/auto-imports.d.ts',
      dirs: ['src/hooks/**', 'src/stores/**'],
    }),
    Components({
      // allow to autoload markdown components under `./src/components/`
      extensions: ['vue', 'md', 'jsx', 'tsx'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.jsx$/, /\.tsx$/],
      resolvers: [],
      dts: 'types/components.d.ts',
    }),
  ],
  resolve: {
    // preserveSymlinks: true,
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
    // dedupe: [
    //  'bn.js',
    // 'bs58',
    // 'lodash',
    // 'buffer-layout',
    // '@solana/web3.js',
    // '@solana/buffer-layout',
    // ],
  },
})
