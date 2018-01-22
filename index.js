"use strict";

var url = require('url'),
    ws = require('./Service')({port: 1337}),
    Entities = require('html-entities').XmlEntities

process.title = 'Websocket Server';

ws.router.mount('/', false, function(request) {

    var cookies = [
        {
            name: 'TestCookie',
            value: 'CookieValue' + Math.floor(Math.random()*1000),
            path: '/',
            secure: false,
            maxage: 5000,
            httponly: true
        }
    ];
    var connection = request.accept(request.origin, cookies)
    var entities = new Entities()

    console.log((new Date()) + ': Connection from origin 3 ' + request.origin + ' accepted.')

    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function(message){
        if (message.type === 'utf8')
        {
            if (message.hasOwnProperty('utf8Data'))
            {
                //var data = JSON.parse(message.utf8Data);
                console.log(entities.encode(message.utf8Data))
                connection.sendUTF(message.utf8Data);
            }
        }
    });

    connection.on('close', function(connection){
        //close user connection
    });
});


ws.router.mount('/about', false, function(request) {
    var cookies = [
        {
            name: 'TestCookie',
            value: 'CookieValue' + Math.floor(Math.random()*1000),
            path: '/about',
            secure: false,
            maxage: 5000,
            httponly: true
        }
    ];
    var connection = request.accept(request.origin, cookies)
    var entities = new Entities()

    console.log((new Date()) + ': Connection from origin 2 ' + request.origin + ' accepted.')

    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function(message){
        if (message.type === 'utf8')
        {
            if (message.hasOwnProperty('utf8Data'))
            {
                //var data = JSON.parse(message.utf8Data);
                console.log(entities.encode(message.utf8Data))
            }
        }
    });

    connection.on('close', function(connection){
        //close user connection
    });
});