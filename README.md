node-servereport
================

A node module that can report status on terminal

#Install

```
npm install servereport
```

#Usage

```javascript
var serverReport = require('servereport');
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

```
result : 

```
=============ERROR=============
code        : #39949
description : Welcome to servereport
===============================

```
#Config
```javascript
{
	"icon" : "=", // What char would you like to make the line?
	"width" : "30", // How long is the line ? (maybe change a little if need)
	"animate" : {
		"enable" : true, //Would you want to enable animation effect ? (true or false)
		"time" : "10"  // Animation step time (ms).
	},
	"title" : "ERROR" // The report title.
}
```
#License

MIT
