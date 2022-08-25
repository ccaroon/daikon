import { ipcMain } from 'electron'

import Napiform from './Napiform'

function handleNapiformTransmogrify (event, msg1, msg2) {
  const napi = new Napiform(msg1, msg2)
  return napi.transmogrify()
}

export default {
  registerHandlers: function () {
    ipcMain.handle('napiform:transmogrify', handleNapiformTransmogrify)
  }
}
