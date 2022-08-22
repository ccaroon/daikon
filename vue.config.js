const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    electronBuilder: {
      preload: 'src/electron/preload.js',
      mainProcessFile: 'src/electron/main.js',
      nodeIntegration: false,
      builderOptions: {
        // options here will be merged with default electron-builder options
        // https://www.electron.build/configuration/configuration
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
})
