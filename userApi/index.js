const http = require('http');
const fs = require('fs')

http.createServer(function (req, res) {
	
	// http header
	
	const url = req.url;
	
	if(url ==='/about') {
		res.write(' Welcome to about us page');
		res.end();
	}
	else if(url ==='/contact') {
		res.write(' Welcome to contact us page');
		res.end();
	}
	else if(url=='/'){
		res.write('Hello World!');
		res.end();
	}
	else if(url=='/userApi'){
		console.log("Directory name is :",__dirname);
        fs.readFile(`${__dirname}/userApi.json`,"utf-8",(error,data)=>{
            // console.log(data);
			console.log("error:",error);
			res.end(data);
        })

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