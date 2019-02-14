const webpack = require('webpack')
module.exports = {
  css: {
    sourceMap: true
  },
  lintOnSave: true,
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({ 'process.env': `"${process.env.NODE_ENV}"` })
    ],
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '~': require('path').resolve(__dirname, 'src/pages'),
        '@': require('path').resolve(__dirname, 'src/components')
      }
    }
  }
}
