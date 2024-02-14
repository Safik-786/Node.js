const http = require('http');
const fs = require('fs')
// Create a server object
http.createServer(function (req, res) {
	
	// http header
	// res.writeHead(200, {'Content-Type': 'text/html'});         //  use one res.writeHead
	
	const url = req.url;
	
	if(url ==='/about') {
		res.write(' Welcome to about us page');
		res.end();
	}
	else if(url ==='/contact') {
		res.write(' Welcome to contact us page');
		res.end();
	}
	else if(url ==='/html') {
		fs.readFile('./public/home.html',(err, data)=>{
			if(err) throw err;
			res.end(data)
		})
	}
	else if(url=='/'){
		res.write('Hello World!');
		res.end();
	}
    else{
        res.writeHead(404,{"content-type" : "text/html"})
        res.write("<h2>404 error occured , url not found</h2>");
        res.end()
    }
}).listen(3000, function() {
	
	// The server object listens on port 3000
	console.log("server start at port 3000");
});


