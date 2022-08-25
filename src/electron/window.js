import { BrowserWindow, Menu, MenuItem } from 'electron'

export default {
  new: function (location, width = 1024, height = 768) {
    const win = new BrowserWindow({
      width, height
    })

    if (location.startsWith('http')) {
      win.loadURL(location)
    } else {
      win.loadFile(location)
    }

    // Add Context menu with Back option
    const menu = new Menu()
    menu.append(new MenuItem({
      label: 'Back',
      click: function () {
        win.webContents.goBack()
      }
    }))

    win.webContents.on('context-menu',
      (event, click) => {
        event.preventDefault()
        menu.popup(win.webContents)
      },
      false
    )
  }
}
