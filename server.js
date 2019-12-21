'use strict'

const fs = require('fs')
const express = require('express')
const server = express()

server.get('/', function(req, res){
    res.redirect('/index.html')
})

server.use('/', express.static(__dirname + '/'))
server.listen(process.env.PORT || 4300)