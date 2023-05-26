// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: ['defineStore']
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    apiSecret: 'Tran Huu Tai',
    public: {
      apiPublic: 'Tran Huu Tai (public)'
    }
  }
});
