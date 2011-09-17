
var http = require("http");
var url = require("url");

function start(route, handle) {
	var onRequest = function(request, response) {

		var pathname = url.parse(request.url).pathname;
		
		route(handle, pathname, response);

		//Logging shizzle
		connection = request.connection;
		console.log("request served to "
						+ connection.remoteAddress
						+ ' '
						+ connection.remotePort
						+ " for "
						+ pathname);
	}

	http.createServer(onRequest).listen(8888);
	console.log("Custom server is started");
}

exports.start = start;
