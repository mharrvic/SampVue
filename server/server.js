'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var fs = require('fs');
var ip = require('ip');
var cors = require('cors');
var app = express();
// Note: Port can be change depends on developer's choice
var port = process.env.PORT || 3000;
var host = ip.address();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors({ optionsSuccessStatus: true }));

// For better structuring of API, must segregate components to to js files
// All api routes according to use must be in scripts directory
eval(fs.readFileSync('scripts/initialize.js').toString());

app.listen(port, host, function() {
    console.log('Listening on ' + host + ':' + port);
});