/* eslint-disable */
const withCss = require('@zeit/next-css')
const path = require('path')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = withCss(
  {
    webpack: (config, { dev }) => {
      config.module.rules.push(
        {
          test: /.*\.(otf|eot|woff|woff2|ttf|svg|png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 20000,
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: true,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75
                }
              }
            }
          ]
        }
      )
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