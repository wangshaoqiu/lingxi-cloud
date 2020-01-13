
'use strict'
const path = require('path')
const webpack = require('webpack');
// const isProd = process.env.NODE_ENV === "production";
const port = process.env.port || process.env.npm_config_port || 8080

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `https://tapi.neets.cc`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
        
      }
    }
    // after: require('./mock/mock-server.js')
  },
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ],
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }

  },
  pwa: {
    iconPaths: {
      favicon32: './favicon.ico',
      favicon16: './favicon.ico',
      appleTouchIcon: './favicon.ico',
      maskIcon: './favicon.ico',
      msTileImage: './favicon.ico'
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  // plugins: {
  //   'autoprefixer': {
  //     browsers: ['Android >= 4.0', 'iOS >= 7']
  //   },
  //   'postcss-pxtorem': {
  //     rootValue: 37.5,
  //     propList: ['*']
  //   }
  // }

};
