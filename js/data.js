
function fun1() {
  
    const { ipcRenderer } = require("electron");
    var sk1 = document.getElementById("sk1").value;
    var sk2 = document.getElementById("sk2").value;
    var mindelay = document.getElementById("mindelay").value;
    var maxdelay = document.getElementById("maxdelay").value;
    var group =  document.getElementById("grp").value;
    var video =  document.getElementById("video").value;

 
    // SENDING SHORT KEY
        ipcRenderer.send("sk1",sk1);
        ipcRenderer.send("sk2",sk2);
        ipcRenderer.send("md",mindelay);
        ipcRenderer.send("maxd",maxdelay);
        ipcRenderer.send("grp",group);
        ipcRenderer.send("video",video);
}
