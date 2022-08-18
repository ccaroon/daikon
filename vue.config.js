const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        // options here will be merged with default electron-builder options
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
})
