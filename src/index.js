const {app, BrowserWindow} = require('electron');
import url from "url";
import path from "path";

let win = null;

app.on('ready',()=>{
    win = new BrowserWindow();
    win.loadURL(
        url.format({
            pathname: "./src/modules/index.html",
            protocol: "file:",
            slashes: true,
        })
    )

    win.show();

    win.on("close",()=>{
        win=null;
    });
});


