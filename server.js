'use strict';

let express = require('express');
let server = express();

server.use('/', express.static(__dirname + '/'));

server.listen(process.env.PORT || 4300);