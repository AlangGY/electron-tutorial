const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
/*
app: 어플리케이션 이벤트 라이프사이클 관리
BrowserWindow: 어플리케이션 윈도우 생성 및 관리
*/

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  ipcMain.handle("ping", () => "pong");
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
