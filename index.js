var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var win;

function spawnWindow() {
  win = new BrowserWindow({width: 800, height: 600, title: 'SoundCove'});
  win.setMenu(null);

  win.loadURL('http://dev.soundcove.io');

  win.on('closed', function() {
    win = null;
  });
}

app.on('ready', spawnWindow);

app.on('window-all-closed', function() {
  if(process.platform != 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if(win === null) {
    spawnWindow();
  }
});
