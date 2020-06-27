module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:7071',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
