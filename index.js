const { app, BrowserWindow,globalShortcut,ipcMain,clipboard } = require ('electron')
const path = require('path')
const { autoUpdater } = require('electron-updater');
require('dotenv').config()

function cw(){
    const win = new BrowserWindow({
        minHeight:700,
        minWidth:600,
        icon: path.join(__dirname, 'eye-icon-1484.png'),
        frame:false,
        
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        } 
    });

    win.loadFile('login.html');
  win.once('ready-to-show', () => {
    autoUpdater.checkForUpdatesAndNotify();
  });
}
ipcMain.on("min",function(event,min){
    BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on("max",function(event,max){
    BrowserWindow.getFocusedWindow().maximize();
});

ipcMain.on("umax",function(event,umax){
    BrowserWindow.getFocusedWindow().unmaximize();
});

ipcMain.on("cl",function(event,close){
    app.quit();
});

ipcMain.on("rs",function(event,close){
    if(BrowserWindow.getFocusedWindow().isMaximized()){
        event.reply("max");
    }
    else{
        event.reply("min");
    }
});
var key;

ipcMain.on("lgdone",function(event,close){
   key = "ASHAR";
});

ipcMain.on("lgcheck",async function(event,close){
    await event.reply("key",key);
});
var nodeKeySender = require('node-key-sender');


   ipcMain.on("sk1", function(event,sk1){ 
    ipcMain.on("sk2", function(event,sk2){
    ipcMain.on("md", function(event,mind){
        ipcMain.on("maxd", function(event,maxd){
            ipcMain.on("grp", function(event,grp){
                ipcMain.on("video", function(event,video){
                  globalShortcut.register(sk1, ()=>{
                     nodeKeySender.setOption('globalDelayBetweenMillisec', 10);
                     clipboard.writeText(video);
                     nodeKeySender.startBatch()
                     .batchTypeKey('tab')
                     .batchTypeKey('tab')
                     .batchTypeKey('enter')
                     .batchTypeKey('enter')
                     .batchTypeCombination(['shift', 'tab'])
                     .batchTypeKey('enter')
                     .batchTypeKey('down')
                     .batchTypeKey('down')
                     .batchTypeKey('tab')
                     .batchTypeKey('tab')
                     .batchTypeCombination(['control', 'v'])
                     .sendBatch();
                    });
                    globalShortcut.register(sk2, ()=>{
        var all = "ALL";
        if(grp === all ){
              nodeKeySender.sendKeys(['tab','tab','tab','enter','tab','tab','tab','tab','enter','enter','tab','tab','tab', ...[...mind],'tab',...[...maxd],'tab','tab','tab','tab','space']);         
        }
        else{
            var str = "tab-tab-space-";
        var repeated = str.repeat(grp);
        var nkeys = repeated.split('-');
              nodeKeySender.sendKeys(['tab','tab','tab','enter','tab','tab','tab','tab','enter','enter','tab','tab','tab', ...[...mind],'tab',...[...maxd],'tab','tab','tab','tab',...[...nkeys]]);         
        }    
    });

    
});
});
});
});
});
});
app.whenReady().then(cw)

autoUpdater.on('update-available', () => {
    mainWindow.webContents.send('update_available');
  });
  autoUpdater.on('update-downloaded', () => {
    mainWindow.webContents.send('update_downloaded');
  });
  ipcMain.on('restart_app', () => {
    autoUpdater.quitAndInstall();
  });

