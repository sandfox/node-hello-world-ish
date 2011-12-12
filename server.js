var customServer = require("./starter");
var router = require("./router");
var autoload = require('./requestHandlerAutoloader');

customServer.start(router.route, autoload);
