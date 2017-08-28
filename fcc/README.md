https://www.freecodecamp.com/hchiam

Ctrl+f for: 'node'

http://evanhahn.com/understanding-express/

Example:

```js
// import module
var http = require("http");

// create server response
var app = http.createServer(function(request, response) {
  // setup/notify response type
  response.writeHead(200, { "Content-Type": "text/plain" });
  // send response
  response.end("Hello world!\n");
});

// turn server on
app.listen(1337, "localhost");
// notify on terminal
console.log("Server running at http://localhost:1337/");
```

## Using Express as middleware for Node (and using Pug):

https://gist.github.com/EvanHahn/5673968

http://evanhahn.com/wp-content/uploads/2013/05/anime.html

## "Hello World" with Express:

https://expressjs.com/en/starter/hello-world.html

```js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
```
