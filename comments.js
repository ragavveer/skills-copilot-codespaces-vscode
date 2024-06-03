// create web server
var express = require('express');
var app = express();
app.listen(3000);
console.log('Server is running on port 3000');
// set the view engine
app.set('view engine', 'ejs');
// render the comments view
app.get('/comments', function(req, res) {
  res.render('comments');
});
// Path: views/comments.ejs
<!DOCTYPE html>
<html>
<head>
  <title>Comments</title>
</head>
<body>
  <h1>Comments</h1>
  <p>Welcome to the comments page</p>
</body>
</html>