export default {
  target: 'static',
  head: {
    title: 'Kento Shirasawa Official Website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This is a website of Kento Shirasawa.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css' }
    ]
  },
  css: [ 
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxt/image'
  ],
  modules: [
    'nuxt-i18n',
  ],
  build: {
  },
  image: {
    // Options
  },
  i18n: {
    seo: true,
    locales: [
      // English
      {
        code: 'en',
        iso: 'en',
        file: 'en.json',
        name: 'English'
      },
      // Esperanto
      {
        code: 'eo',
        iso: 'eo',
        file: 'eo.json',
        name: 'Esperanto'
      },
      // Bokmål
      {
        code: 'nb',
        iso: 'nb',
        file: 'nb.json',
        name: 'Bokmål'
      },
      // Deutsch
      {
        code: 'de',
        iso: 'de',
        file: 'de.json',
        name: 'Deutsch'
      },
      // 日本語
      // {
      //   code: 'ja',
      //   iso: 'ja',
      //   file: 'ja.json',
      //   name: '日本語'
      // },
    ],
    defaultLocale: 'en',
    fallbackLocale: 'en',
    lazy: true,
    langDir: 'locales/',
  }
}
