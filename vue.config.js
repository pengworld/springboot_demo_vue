const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      "":{
        target:"http://localhost:8085",
        changeOrigin:true,
        pathRewrite:{
          '^':''
        }
      }
    }
  }
})
