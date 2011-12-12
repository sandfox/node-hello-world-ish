function load(handlerName) {
	try {
		return require('./requestHandlers/' + handlerName);
	}
	catch (err) {
		console.log('FAIL for handler ' + handlerName)
	}
}

exports.load = load;