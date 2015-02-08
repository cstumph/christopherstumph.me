var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 80 });

server.start(function () {
    console.log('Server running at:', server.info.uri);
});