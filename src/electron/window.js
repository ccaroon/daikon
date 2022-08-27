import { BrowserWindow, Menu, MenuItem } from 'electron'

export default {
  new: function (location, width = 1024, height = 768) {
    const win = new BrowserWindow({
      width,
      height,
      autoHideMenuBar: true
    })

    if (location.startsWith('http')) {
      win.loadURL(location)
    } else {
      win.loadFile(location)
    }

    // Add Context Menu
    const menu = new Menu()
    menu.append(new MenuItem({
      label: 'Back',
      click: function () {
        win.webContents.goBack()
      }
    }))
    menu.append(new MenuItem({
      label: 'Reload',
      role: 'forceReload'
    }))
    menu.append(new MenuItem({
      type: 'separator'
    }))
    menu.append(new MenuItem({
      label: 'Copy',
      role: 'copy'
    }))
    menu.append(new MenuItem({
      label: 'Paste',
      role: 'paste'
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
