const { BrowserWindow } = require('electron')
const env = require('../env')
const globalEmitter = require('../lib/globalEmitter')

const menuTemplate = [
  {
    label: 'Toggle Zazu',
    click () {
      globalEmitter.emit('toggleWindow')
    },
  },
  {type: 'separator'},
  {
    label: 'Edit',
    submenu: [
      { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
      { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
      { type: 'separator' },
      { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
      { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
      { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
      { label: 'Select All', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:' },
    ],
  },
]
if (env.name !== 'production') {
  menuTemplate.push({type: 'separator'})
  menuTemplate.push({
    label: 'Development',
    submenu: [{
      label: 'Reload',
      accelerator: 'CmdOrCtrl+R',
      click: function () {
        BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache()
      },
    }, {
      label: 'Toggle DevTools',
      accelerator: 'Alt+CmdOrCtrl+I',
      click: function () {
        BrowserWindow.getFocusedWindow().toggleDevTools()
      },
    }],
  })
}
menuTemplate.push({type: 'separator'})
menuTemplate.push({
  label: 'Quit',
  accelerator: 'CmdOrCtrl+Q',
  click: () => {
    globalEmitter.emit('killSwitch')
  },
})

module.exports = { menuTemplate }
