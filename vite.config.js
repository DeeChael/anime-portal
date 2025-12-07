import { fileURLToPath, URL } from 'node:url'
import { builtinModules } from 'module';

const allExternal = [
  ...builtinModules,
  ...builtinModules.map((m) => `node:${m}`)
]

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      external: ['fsevents', ...allExternal]
    }
  }
})