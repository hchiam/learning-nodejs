# Learning Node.js

Just one of the things I'm learning. https://github.com/hchiam/learning

## tutorial 1:

[LearnCode.academy tutorial on YouTube](https://www.youtube.com/watch?annotation_id=annotation_444363647&feature=iv&index=3&list=PLoYCgNOIyGAApoDfJHjmMgGNlYenKg5jO&src_vid=pU9Q6oiQNd0&v=FqMIyTH9wSg)

## Terminal/Command-Line commands and localhost:

- install node and check version of node and of npm (node package manager) that came with it
  - npm lets you install dependencies and do package management

```sh
install node.js
node -v
npm -v
```

- install our first package with npm (the package being "express-generator", to building express apps quick and their scaffolding):
  - ("-g" for global, not local install)

```
sudo npm install -g express-generator
```

- run express as a command, and give app name "exp2016"
  - ("--hogan" to use "hogan" hjs for HTML-like files under "views" folder)
  - ("-c" for CSS)
  - ("less" to use "Less" ("less-middleware"))

```
express exp2016 --hogan -c less
```

- (so far haven't actually downloaded the dependecies, but should have a JSON file with a list of dependecies in it)

- start actually adding dependencies to the node modules folder

```
cd exp2016 && npm install
```

- run the app

```
DEBUG=exp2016:* npm start
```

- enter this "website" into your browser (like Firefox, etc.) and you should see "Express Welcome to Express":
  [http://localhost:3000/](http://localhost:3000/)

- This is a basic web server application! (hit refresh and you'll see more "GET"s)
- Express runs as the web server itself.

- click control+C to cancel/stop the server

- every time make change and save, would then need to cancel and reboot app --> so use utility "nodemon" to automatically check for changes and cancel and reload app while you change and save

```
sudo npm install -g nodemon
```

- use nodemon

```
nodemon bin/www
```

## tutorial 2:

http://tutorialzine.com/2012/08/nodejs-drawing-game/

The following steps assume you're using Terminal/Command-Line.

You may need to enter this command to install node.js if you don't already have it installed:

`npm install socket.io@0.9.10 node-static`

Download the "drawinggame" folder from this repo to get its contents.

Navigate to the "drawinggame" folder so that you're on the same directory level as "app.js".

Enter this command to run the app:

`node app.js `

Open the "index.html" file in your browser (e.g. Firefox).

To stop running node, hit Ctrl+C in Terminal/Command-Line.

## tutorial 3:

https://github.com/hchiam/learning-nodejs/tree/master/fcc

## read a local file via console CLI:

```js
// TODO: file name goes here
var fileName = "fileName.js";

var fs = require("fs");
fs.readFile(fileName, "utf8", function (err, data) {
  if (err) return console.log(err);
  // console.log(data);
  processFileText(data);
});

function processFileText(text) {
  // TODO: custom code goes here
  console.log(text);
}
```

## Random notes:

```bash
npm -g i # do outside of a repo!!!!! somehow knows it's in a repo and does weird things, or at least in older npm versions

npm cache verify # to clean up unused versions??? also do outside of a repo
```

Troubleshooting updating node:

https://stackoverflow.com/a/12570971

```sh
# this may not work:
brew upgrade node
# so just go with the download option:
```

https://nodejs.org

```sh
nvm install v16.13.1; node --version
```

## more JS stuff:

https://github.com/hchiam/learning-js

https://github.com/hchiam/learning-js/tree/master/generate_folder_with_color_theme
