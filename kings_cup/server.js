// // server.js
// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');
// app = express();
// app.use(serveStatic(__dirname + "/dist"));
// var port = 80;
// var hostname = '0.0.0.0';

// app.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}/`);
//  });

// Dependencies
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();

var serveStatic = require('serve-static');

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/tjallo.nl/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/tjallo.nl/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/tjallo.nl/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

app.use(serveStatic(__dirname + "/dist"));

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});