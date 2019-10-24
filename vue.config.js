module.exports = {
  publicPath: './',
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
