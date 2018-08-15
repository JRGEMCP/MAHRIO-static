process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
  require('node-env-file')('.env');
  console.log('Running Development!');
}

require('mahrio').runServer(process.env, __dirname)
 .then( function(server) {

 	server.route({
		path: '/',
		method: 'GET',
		handler: function(req, rep){
			rep('Your static site new here!');
		}
	});

 });
