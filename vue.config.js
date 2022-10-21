const path = require('path')
module.exports = {
  publicPath: './',
  configureWebpack: config => {
    config.mode = process.env.NODE_ENV
    config.externals = {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'moment': 'moment'
    }
    config.resolve = {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './src/assets')
      }
    }
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            maxSize: 600000,
            maxInitialRequests: 20,
            priority: 2,
            reuseExistingChunk: true,
            enforce: true
          },
          common: {
            name: 'common',
            chunks: 'initial',
            maxInitialRequests: 5,
            minChunks: 2,
            reuseExistingChunk: true,
            priority: 1,
            enforce: true
          },
          antdesign: {
            name: 'ant-design-vue',
            test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
            chunks: 'initial',
            maxSize: 600000,
            reuseExistingChunk: true,
            priority: 3,
            enforce: true
          },
          iview: {
            name: 'view-ui',
            test: /[\\/]node_modules[\\/]iview[\\/]/,
            chunks: 'initial',
            maxSize: 600000,
            reuseExistingChunk: true,
            priority: 3,
            enforce: true
          }
        }
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })
  },
  css: {
    loaderOptions: {
      less: {
        modifyvars: {
          'font-family': 'PingFangSC-Regular, PingFang SC, tahoma, arial, "Hiragino Sans GB", "Microsoft yahei", "Segoe UI", roboto, "Helvetica Neue", sans-serif'
        },
        javascriptEnabled: true
      }
    }
  },
  parallel: require('os').cpus().length > 1
}
