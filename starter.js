var http = require("http");
var url = require("url");

function start(route, autoload) {

	var recievePorts = [8888, 8889, 8890];

	var onRequest = function(request, response) {

		var pathname = url.parse(request.url).pathname;

		route(autoload, pathname, request, response);



		//Logging shizzle
		connection = request.connection;
		console.log("request served to "
						+ connection.remoteAddress
						+ ' '
						+ connection.remotePort
						+ " for "
						+ pathname);
	}

	for (var i = recievePorts.length - 1; i >= 0; i--) {
		recievePort = recievePorts[i];
		http.createServer(onRequest).listen(recievePort);
		console.log("Custom server is started on "+recievePort);
	};
	
}

exports.start = start;