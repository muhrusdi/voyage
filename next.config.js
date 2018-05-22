/* eslint-disable */
const withCss = require('@zeit/next-css')
const path = require('path')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withCss(
  {
    webpack: (config, { dev }) => {
      /**
       * Install and Update our Service worker
       * on our main entry file :)
       * Reason: https://github.com/ooade/NextSimpleStarter/issues/32
       */
      const oldEntry = config.entry
  
      config.entry = () =>
        oldEntry().then(entry => {
          entry['main.js'] && entry['main.js'].push(path.resolve('./utils/offline'))
          return entry
        })
  
      /* Enable only in Production */
      if (!dev) {
        // Service Worker
        config.plugins.push(
          new SWPrecacheWebpackPlugin({
            cacheId: 'next-ss',
            filepath: './static/sw.js',
            minify: true,
            staticFileGlobsIgnorePatterns: [/\.next\//],
            staticFileGlobs: [
              'static/**/*' // Precache all static files by default
            ],
            runtimeCaching: [
              // Example with different handlers
              {
                handler: 'fastest',
                urlPattern: /[.](png|jpg|css)/
              },
              {
                handler: 'networkFirst',
                urlPattern: /^http.*/ //cache all files
              }
            ]
          })
        )
      }
  
      return config
    },
    exportPathMap: function(defaultPathMap) {
      return {
        '/': { page: '/' },
        '/blogs': { page: '/blogs' }
      }
    }
  }
)