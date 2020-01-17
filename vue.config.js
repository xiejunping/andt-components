module.exports = {
  publicPath: './',
  configureWebpack: config => {
    config.mode = process.env.NODE_ENV
    if (config.mode === 'production') {
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios': 'axios',
        'moment': 'moment'
      }
    }
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            priority: 2,
            enforce: true
          },
          common: {
            name: 'common',
            chunks: 'initial',
            minChunks: 2,
            maxInitialRequests: 5,
            priority: 1
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
  }
}
