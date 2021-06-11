module.exports = {
  publicPath: "./", //打包时加上
  devServer: {
    open: true,//设置自动打开
    port: 1880,//设置端口
    proxy: {
      //设置代理
      '/axios': {
        target: 'http://101.15.22.98',
        changeOrigin: true,
        secure: false, //如果是http接口，需要配置该参数
        pathRewrite: {
          '^/axios': ''
        }
      }
    }
  }
}