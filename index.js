require('mahrio').runServer(process.env, __dirname)
 .then( function(server) {
 
 	server.route({
		path: '/',
		method: 'GET',
		handler: function(req, rep){
			rep('Open browser at http://127.0.0.1:6085');
		}
	});
 
 });
