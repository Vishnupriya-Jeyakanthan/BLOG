const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // proxy: "http://10.30.1.164:8080"
    proxy: {
      '/one': {
        target:'http://10.30.1.164:8080',
        pathRewrite: {'/one' : ''}
      },
      '/three': {
        target: 'http://10.30.1.164:8083/',
        pathRewrite: {'/three' : ''}
      },
      '/two': {
        target:'http://10.30.1.164:8082',
        pathRewrite: {'/two' : ''}
      }
      //comment added
    }
  }
})
