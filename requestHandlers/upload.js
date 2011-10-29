function handle(request, response) {

	console.log("Request handler upload was called");

	var postData = "";

	request.addListener("data", function(postDataChunk) {
	      postData += postDataChunk;
	      console.log("Received POST data chunk '"+
	      postDataChunk + "'.");
	    });

	request.addListener("end", function() {
      respond(response, postData);
    });
	
}

function respond(response, postData) {

	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello upload  \n" + postData);
    response.end();
}


exports.handle = handle;