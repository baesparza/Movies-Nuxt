const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: 'https://baesparza.github.io/Movies-Nuxt/'
  }
} : {}

module.exports = {
  head: {
    title: 'movies-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      {rel:'manifest', href:'/manifest.json'}
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '@/assets/bootstrap/bootstrap-grid.min.css',
    '@/assets/bootstrap/bootstrap-reboot.min.css'
  ],
  routerBase
}
