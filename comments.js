// create web server and listen on port 3000
// to run: node comments.js

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var comments = [
  {name: 'John', email: ''}]