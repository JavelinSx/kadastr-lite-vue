// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',

    //...
  ],
  plugins: ['plugins/v-mask.js'],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    plugins: [
      {
        name: 'force-pinia-hmr',
        handleHotUpdate({ file, server }) {
          if (file.endsWith('.js') && file.includes('/stores/')) {
            server.ws.send({
              type: 'full-reload',
            });
          }
        },
      },

    ],
    
  },
})
