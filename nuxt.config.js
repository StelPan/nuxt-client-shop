module.exports = {
  mode: 'universal',
  /**
   * Client Nuxt-files directory
   */
  srcDir: __dirname,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f8f8f8' },
  /*
  ** Global CSS
  */
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    '~/assets/css/main.scss'
  ],
  /*
  ** Settings for auth strategies
  */
  auth: {
    strategies: {
      'laravelJWT': {
        provider: 'laravel/jwt',
        url: 'http://127.0.0.1:8000',
        token: {
          maxAge: 60 * 60 // same as ttl but in seconds
        },
        refreshToken: {
          maxAge: 20160 * 60 // same as refresh_ttl but in seconds
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          refresh: { url: '/api/auth/refresh', method: 'post' },
          user: { url: '/api/auth/user', method: 'get' },
          logout: { url: '/api/auth/logout', method: 'post' }
        }
      }
    }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/vue-slick-carousel',
    '~/plugins/global-mixins',
    { src: '~/plugins/vuelidate', mode: 'client' },
    { src: '~/plugins/yandex-api', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['bootstrap-vue/nuxt', { icons: true }],
    'cookie-universal-nuxt',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    prefix: '/api',
    host: '127.0.0.1',
    port: 8000
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server: {
    port: 3000
  }
}
