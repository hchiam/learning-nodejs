var express = require('express');
var router = express.Router();

///* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

//router.get('/', function(request, response, next) {
//  //response.send('hi');
//  response.render('index', {
//    title: 'My App!',
//    age: 1000
//  });
//});

//respond to an API call ("get" for read or "post" for write):
router.get('/', function(request, response) {
  //access all the post variables with request.query parameters that came through:
  console.log(request.query); //for example, to access the parameters in the call http://localhost:3000/?age=1001&name=what
});

module.exports = router;
