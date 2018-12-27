const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'msapplication-TileColor', content: '#2f2a95' },
      { name: 'theme-color', content: '#2f2a95' },
      { name: 'google-site-verification', content: 'YVLJMl-nT8Qgc9wWA6WTP9xOQRZ5xLgyHcFZetcbn84' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon/favicon-16x16.png' },
      { rel: 'manifest', href: 'favicon/site.webmanifest' },
      { rel: 'mask-icon', href: 'favicon/safari-pinned-tab.svg', color: '#2f2a95' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/meo8vpa.css' }  
    ],
    script: [
      { src: 'fs.js' }
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF9560' },

  /*
  ** Global CSS
  */
  css: [
    '~sass/main.sass'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
