var serverReport = require('../lib/serverReport.js');
var Error = new serverReport ({
	"icon" : "=",
	"width" : "30",
	"animate" : {
		"enable" : true,
		"time" : "10"
	},
	"title" : "ERROR"
});

Error.log({
	code : "#39949",
	description : "Welcome to servereport"
});
