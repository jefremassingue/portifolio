// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['remixicon/fonts/remixicon.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    // [
    //   '@nuxtjs/i18n',
    //   {
    //     locales: ['en', 'pt'],
    //     defaultLocale: 'pt',
    //     vueI18n: {
    //       fallbackLocale: 'pt',
    //       messages: {
    //         en: {
    //           greeting: 'Hello world!'
    //         },
    //         pt: {
    //           greeting: 'Ola mundo!'
    //         }
    //       }
    //     }
    //   }
    // ]
  ]
})
