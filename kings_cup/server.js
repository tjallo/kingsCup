// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = 80;
var hostname = '0.0.0.0';

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });