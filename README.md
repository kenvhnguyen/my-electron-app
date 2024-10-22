# my-electron-app
Trying out building an electron app

Visual Studio Code, Docker Desktop, Github Desktop Slack are all Electron apps

Electron apps are scaffolded using npm, with the package.json file as an entry point. Start by creating a folder and initializing an npm package within it with npm init.
```shell script
npm init
```

This command will prompt you to configure some fields in your package.json. There are a few rules to follow for the purposes of this tutorial:

The entry point should be main.js (you will be creating that file soon).
author, license, and description can be any value, but will be necessary for packaging later on.

Then, install Electron into your app's devDependencies, which is the list of external development-only package dependencies not required in production.

Why is Electron a dev dependency of your Electron app :?
This may seem counter-intuitive since your production code is running Electron APIs. However, packaged apps will come bundled with the Electron binary, eliminating the need to specify it as a production dependency.

```shell script
npm install electron --save-dev
```

The .gitignore file specifies which files and directories to avoid tracking with Git. You should place a copy of GitHub's Node.js gitignore template into your project's root folder to avoid committing your project's node_modules folder.

The main script you defined in package.json is the entry point of any Electron application. This script controls the main process, which runs in a Node.js environment and is responsible for controlling your app's lifecycle, displaying native interfaces, performing privileged operations, and managing renderer processes (more on that later).

Before creating your first Electron app, you will first use a trivial script to ensure your main process entry point is configured correctly. Create a main.js file in the root folder of your project with a single line of code:

``` shell script
console.log('Hello from Electron 👋')
```
Because Electron's main process is a Node.js runtime, you can execute arbitrary Node.js code with the electron command (you can even use it as a REPL). To execute this script, add electron . to the start command in the scripts field of your package.json. This command will tell the Electron executable to look for the main script in the current directory and run it in dev mode.

``` shell script
npm run start
```

Your terminal should print out Hello from Electron 👋. 

# Create user interfaces with HTML and load that into a native window.

Loading a web page into BrowserWindow

In Electron, each window displays a web page that can be loaded either from a local HTML file or a remote web address.

Replace the contents of your main.js file with the following code, explained in the code comments.

At this point, running your Electron application's start command should successfully open a window that displays your web page!

Each web page your app displays in a window will run in a separate process called a renderer process (or simply renderer for short). Renderer processes have access to the same JavaScript APIs and tooling you use for typical front-end web development, such as using webpack to bundle and minify your code or React to build your user interfaces.

# Criticism of Electron

One common (and entirely correct) criticism of Electron-based apps is their footprint. An Electron app comes packed with its own unique, vendored copy of a web browser, and has to spin up an entirely separate web browser process when it’s launched. Electron apps can take hundreds of megabytes or more on disk, and their in-memory footprint is typically that big, too. And while modern hardware can generally handle the load, a bigger question arises: Isn’t there a better way to do this?

TAURI