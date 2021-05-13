export default {
  target: 'static',
  head: {
    title: 'Kento Shirasawa Official Website',
    htmlAttrs: {
      lang: 'eo'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex' },
      { hid: 'description', name: 'description', content: 'Ĉi tiu estas la oficiala retejo de Kento Shirasawa (SiraKen).' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css' }
    ]
  },
  css: [
    '~/assets/main.scss'
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
  ],
  modules: [
  ],
  build: {
  }
}
