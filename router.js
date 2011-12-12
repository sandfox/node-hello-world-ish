function route(autoload, pathname, request, response) {
	console.log("About to route a request for " + pathname);

	handle = autoload.load(pathname);

	//var util = require('util');
	//console.log(util.inspect(handle, true, null))

	if (typeof handle === 'object') {
		handle.handle(request, response);
	} else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404);
		//response.write("404 Not found"); //No response body allowed
		response.end();
	}
}

exports.route = route;