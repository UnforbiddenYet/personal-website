import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssMixins from 'postcss-mixins'
import postcssNested from 'postcss-nested'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    postcss: {
      plugins: [postcssMixins({ mixinsFiles: ['src/styles/win95-mixins.css'] }), postcssNested()],
    },
  },
})
