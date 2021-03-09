const env = process.env.NODE_ENV
const proxy = {
  '/admin/': {
    target: 'https://dev-paas-app-admin.e-buy.com',
    changeOrigin: true // 允许使用localhost
  }
}

module.exports = {
  publicPath: '/',
  devServer: {
    proxy
  },
  configureWebpack: {
    devtool: env === 'production' ? undefined : 'eval-source-map'
  }
}
