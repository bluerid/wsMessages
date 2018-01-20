"use strict";

var url = require('url'),
    wsServer = require('./wsService')({port: 1337})

process.title = 'ws.server';


wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);

    console.log((new Date()) + ': Connection from origin ' + request.origin + '.')

    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log(message);
        }
    });

    connection.on('close', function(connection) {
        // close user connection
    });
});