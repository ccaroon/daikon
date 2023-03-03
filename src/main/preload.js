const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('Napiform', {
  transmogrify: (msg1, msg2) => {
    return ipcRenderer.invoke('napiform:transmogrify', msg1, msg2)
  }
})

contextBridge.exposeInMainWorld('Main', {
  newWindow: (location, width, height) => {
    ipcRenderer.invoke('main:newWindow', location, width, height)
  }
})

contextBridge.exposeInMainWorld('NodeJS', { process })

contextBridge.exposeInMainWorld('Modules', {
  vuejs: {
    version: require('vue/package.json').version
  }
})

// Menu Action Handler Registration
contextBridge.exposeInMainWorld('Menu', {
  registerHandler: (menuId, callback) => ipcRenderer.on(menuId, callback)
})
