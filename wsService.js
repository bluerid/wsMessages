var WebSocketServer = require('websocket').server,
    http = require('http'),
    defaultPort = 3000

module.exports = (options) => {
    //Create the server
    var server = http.createServer((request, response) => {
        //Not implementing anything, 
        //Just returns a new instance of http.Server to use within a WebSocket server.
    });
    server.listen( options.port || defaultPort, () => {});
    return wsServer = new WebSocketServer({
        httpServer: server,
        autoAcceptConnections: false
    });
}