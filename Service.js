var WebSocketServer = require('websocket').server,
    WebSocketRouter = require('websocket').router,
    http = require('http'),
    defaultPort = 3000

module.exports = (options) => {
    var ws = {}
    //Create the server
    var httpServer = http.createServer((request, response) => {
        //Not implementing anything,
        //Just returns a new instance of http.Server to use within a WebSocket server.
    });
    httpServer.listen( options.port || defaultPort, () => {});
    ws.server = new WebSocketServer({
        httpServer: httpServer,
        autoAcceptConnections: false
    });
    ws.router = new WebSocketRouter();
    ws.router.attachServer(ws.server);
    return ws
}