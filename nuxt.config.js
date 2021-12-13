export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxtsample",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/color-mode'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    "nuxt-buefy",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxt/content",
    '@nuxtjs/dayjs',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyCv5zbHvDKWwCt6feWoBauwWhinIDBbcvI',
          authDomain: 'sigmaservice-a5620.firebaseapp.com',
          databaseURL: 'https://sigmaservice-a5620.firebaseio.com',
          projectId: 'sigmaservice-a5620',
          storageBucket: 'sigmaservice-a5620.appspot.com',
          messagingSenderId: '611425555532',
          appId: '1:611425555532:web:27af51274e0dbd84df90e9',
          measurementId: 'G-8T2DWWVPH7'
        },
        services: {
          // Anything can be added here
        }
      }
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
