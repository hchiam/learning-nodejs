# nodejsSandbox
My Node.js sandbox.

[LearnCode.academy tutorial on YouTube](https://www.youtube.com/watch?annotation_id=annotation_444363647&feature=iv&index=3&list=PLoYCgNOIyGAApoDfJHjmMgGNlYenKg5jO&src_vid=pU9Q6oiQNd0&v=FqMIyTH9wSg)

#Terminal/Command-Line commands and localhost:

* install node and check version of node and of npm (node package manager) that came with it
    * npm lets you install dependencies and do package management

```
install node.js
node -v
npm -v
```

* install our first package with npm (the package being "express-generator", to building express apps quick and their scaffolding):
    * ("-g" for global, not local install)

```
sudo npm install -g express-generator
```

* run express as a command, and give app name "exp2016"
    * ("--hogan" to use "hogan" hjs for HTML-like files under "views" folder)
    * ("-c" for CSS)
    * ("less" to use "Less" ("less-middleware"))

```
express exp2016 --hogan -c less
```

* (so far haven't actually downloaded the dependecies, but should have a JSON file with a list of dependecies in it)

* start actually adding dependencies to the node modules folder

```
cd exp2016 && npm install
```

* run the app

```
DEBUG=exp2016:* npm start
```

* enter this "website" into your browser (like Firefox, etc.) and you should see "Express Welcome to Express":
[http://localhost:3000/](http://localhost:3000/)

* This is a basic web server application! (hit refresh and you'll see more "GET"s)
* Express runs as the web server itself.

* click control+C to cancel/stop the server

* every time make change and save, would then need to cancel and reboot app --> so use utility "nodemon" to automatically check for changes and cancel and reload app while you change and save

```
sudo npm install -g nodemon
```

* use nodemon

```
nodemon bin/www
```