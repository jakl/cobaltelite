#!/usr/bin/env node

var https = require('https'),
fs = require('fs');

var sslOptions = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt'),
  ca: fs.readFileSync('./ca.crt'),
  requestCert: true,
  rejectUnauthorized: false
};

var secureServer = https.createServer(sslOptions, function(req, res){
  res.writeHead(200);
  res.end(fs.readFileSync('./index.html'));
}).listen(443);
