var exec = require('child_process').exec;

function handle(request, response) {
	console.log("Request handler start was called");
		exec("find /", { timeout: 10000, maxBuffer: 2000*1024 }, function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});
}

exports.handle = handle;