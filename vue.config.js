const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.ts',
      title: '练习题生成器'
    }
  }
})
