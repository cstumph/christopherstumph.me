var Hapi   = require('hapi')
var server = new Hapi.Server()


//ENV
if (process.env.NODE_ENV === 'prod') {
  server.connection({ port: 80 });
}
else {
  server.connection({ port: 9000 });
}


// ROUTES
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});
server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});


//START
server.start(function () {
    console.log('Server running at:', server.info.uri);
});