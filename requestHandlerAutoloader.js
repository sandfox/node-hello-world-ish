function load(handlerName) {
	return require('./requestHandlers/' + handlerName);
}

exports.load = load;