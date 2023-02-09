const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})
module.exports = {
  pages:{
    index:{
      entry:"examples/main.js",
      template:"public/index.html",
      filename:"index.html"
    }
  }
}