var http = require("http");

// cratea server Object...

http
    .createServer(function(req, res) {
        res.write("Hello World");
        // write response on the cliend

        res.end(); //end the response
    })
    .listen(8080);