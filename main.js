console.log('Hello from Electron 👋')

// importing 2 common Electron modules using CommonJS module syntax
const { app, BrowserWindow } = require('electron')

// writing a reusable function to instantiate windows
const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600
    })

    window.loadFile('index.html')
}

// Calling your function when the app is ready
app.whenReady().then(() => {
    createWindow()
})

// Many of Electron's core modules are Node.js event emitters that adhere to Node's asynchronous event-driven architecture. 
// The app module is one of these emitters.

// In Electron, BrowserWindows can only be created after the app module's ready event is fired. 
// You can wait for this event by using the app.whenReady() API and calling createWindow() once its promise is fulfilled.

// Note: You typically listen to Node.js events by using an emitter's .on function, like this:
/// app.on('ready', () => { createWindow() })
// However, Electron exposes app.whenReady() as a helper specifically for the ready event to avoid subtle pitfalls with directly listening to that event in particular. See electron/electron#21972 for details.