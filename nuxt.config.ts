import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  meta: {
    title: 'omise-nuxt3',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
    ],
    script: [
      { hid: 'omise', src: 'https://cdn.omise.co/omise.js' },
    ],
  },

  components: {
    global: true,
    dirs: ['~/components'],
  },

  css: ['~/assets/css/global.css'],

  plugins: [],

  modules: [
    '@nuxtjs/partytown',
  ],

  buildModules: [
    'nuxt-windicss',
  ],

  typescript: { shim: false },

  windicss: { analyze: true },

  runtimeConfig: {
    public: {
      omise: {
        pubkey: process.env.OMISE_PUBKEY,
      },
    },
  },
})
