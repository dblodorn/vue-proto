# VUE-PROTO

> A Vue.js rapid prototyping skeleton project with Vue-Router and Vue-Resource, using component architecture. Includes some helper functions, a small image preload script, Simple State Manager, and some other stuff.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production with minification & deploy via ftp
npm run prod
```

## Utilities you can run from the command line:
``` bash

# using vinyl ftp through gulp you can do an easy deploy by creating a file called deploy-credentials.json in the root directory, this file should have the following info, don't forget to gitignore!

{
  "user": "username",
  "password": "password",
  "host": "your.host",
  "remoteFolder": "/uploadfolder/"
}
```