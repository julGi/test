// server/app.js
const express = require('express');
const fs = require("fs");
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')

const app = express();

// Setup logger
app.use(cors()).use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

console.log(`DirName : `+__dirname);

// Produce REST API for control website datas
app.get('/api/datas', function (req, res) {
   fs.readFile( __dirname + "/" + "datas.json", 'utf8', function (err, data) {
       /*setTimeout(() => {
         console.log( data );
         res.json(JSON.parse(data));
       }, 3000);
       console.log( "Attente ..." );*/

       console.log( data );
       res.json(JSON.parse(data));
   });
})

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
