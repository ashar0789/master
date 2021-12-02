const { ipcRenderer } = require('electron'); 

  function min(){
    ipcRenderer.send("min");
  }

  function max(){
    ipcRenderer.send("max");
  }

  function umax(){
    ipcRenderer.send("umax");
  }

  function cl(){
    ipcRenderer.send("cl");
  }

  function rs(){
    ipcRenderer.send("rs");
  }

  var key2;

  ipcRenderer.on("key",function(event,key){
    key2 === key;
    if(key !== "ASHAR"){
      window.location.replace("login.html");
    }
});

function onrun(){
  if(key2 !== "ASHAR"){
    window.location.replace("login.html");
  }
}

function check(){
  ipcRenderer.send("lgcheck");
  
}
  ipcRenderer.on("max",function(event,close){
    document.body.classList.add('maximized');
});

ipcRenderer.on("min",function(event,close){
  document.body.classList.remove('maximized');
});





