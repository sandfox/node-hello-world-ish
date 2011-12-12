function handle(request, response) {

	var db = require("/Users/grapple/node/node_modules/riak-js").getClient({host: "riak-1", port: "8098" });


	console.log("Request handler tracker was called");

	var postData = "";

	request.addListener("data", function(postDataChunk) {
	      postData += postDataChunk;
	      console.log("Received POST data chunk '"+
	      postDataChunk + "'.");
	    });

	request.addListener("end", function() {

		//add some code to read data - blocking
		 var data = JSON.parse(postData);

      respond(response, postData);
    });
	
}

function respond(response, postData) {

	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello upload  \n" + postData);
    response.end();
}


exports.handle = handle;