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
