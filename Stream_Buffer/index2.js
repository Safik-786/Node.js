const fs = require('fs')
const http = require('http')
const server = http.createServer();
server.on('request',(req,resp)=>{
    const rstream = fs.createReadStream('input.txt')        // it will read the stream
    rstream.pipe(resp)                                      // it will use to write the stream
})
server.listen(5003,"127.0.0.1");        