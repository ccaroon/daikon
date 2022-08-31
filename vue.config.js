const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    // chainWebpackMainProcess: (config) => {
    //   config.module
    //     .rule('style')
    //     .test(/\.(sass|scss|css)$/)
    //     .use(['style-loader', 'css-loader', 'sass-loader'])
    //     .loader(['style-loader', 'css-loader', 'sass-loader'])
    //     .end()
    // },
    // chainWebpackRenderProcess: (config) => { },
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
