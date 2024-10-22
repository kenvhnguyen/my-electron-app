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



One common (and entirely correct) criticism of Electron-based apps is their footprint. An Electron app comes packed with its own unique, vendored copy of a web browser, and has to spin up an entirely separate web browser process when it’s launched. Electron apps can take hundreds of megabytes or more on disk, and their in-memory footprint is typically that big, too. And while modern hardware can generally handle the load, a bigger question arises: Isn’t there a better way to do this?

TAURI