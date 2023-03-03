// https://www.electronjs.org/docs/latest/api/menu
import { BrowserWindow, Menu, MenuItem } from 'electron'

const appName = 'Daikon'
const isMac = process.platform === 'darwin'
// const mainMetaKey = isMac ? 'Cmd' : 'Ctrl'
// -----------------------------------------------------------------------------
const aboutMenu = {
  label: `About ${appName}`,
  click: () => BrowserWindow.getFocusedWindow().webContents.send('menu-help-about')
}

const macApp = [
  {
    label: appName,
    submenu: [
      aboutMenu,
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideOthers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }
]

// -----------------------------------------------------------------------------
// https://www.electronjs.org/docs/latest/api/menu#menuitems
const template = [
  // { role: 'appMenu' }
  ...(isMac ? macApp : []),

  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      ...(isMac ? [] : [{ role: 'quit' }])
    ]
  },

  { role: 'editMenu' },

  { role: 'viewMenu' },
  // {
  //   label: 'View',
  //   submenu: [
  //     {
  //       label: 'Main',
  //       accelerator: mainMetaKey + '+H',
  //       click: () => BrowserWindow.getFocusedWindow().webContents.send('menu-view-main')
  //     }
  //   ]
  // },
  { role: 'windowMenu' },
  {
    role: 'help',
    submenu: [
      ...(isMac ? [] : [aboutMenu]),
      {
        label: 'View on GitHub',
        click () { require('electron').shell.openExternal('https://github.com/ccaroon/daikon') }
      },
      { role: 'toggleDevTools' }
    ]
  }
]

// -----------------------------------------------------------------------------
export default {
  setApplicationMenu: function () {
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
  },
  addContext: function (window) {
    const ctxMenu = new Menu()
    ctxMenu.append(new MenuItem({
      label: 'Copy',
      role: 'copy'
    }))
    ctxMenu.append(new MenuItem({
      label: 'Paste',
      role: 'paste'
    }))
    ctxMenu.append(new MenuItem({
      type: 'separator'
    }))
    ctxMenu.append(new MenuItem({
      label: 'Dev Tools',
      role: 'toggleDevTools'
    }))

    window.webContents.on('context-menu',
      (event, click) => {
        event.preventDefault()
        ctxMenu.popup(window.webContents)
      },
      false
    )
  }
}
