process.env.NODE_ENV="development";

require('mahrio').runServer(process.env, __dirname)
 .then( function(server) {
 
 	server.route({
		path: '/',
		method: 'GET',
		handler: function(req, rep){
			rep('Your static site here!');
		}
	});
 
 });
