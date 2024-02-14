const fs = require('fs')
const http = require('http')
const server = http.createServer();
// server.on('request', (req, resp) => {
//     var fs = require('fs');
//     fs.readFile('input.txt', (err, data) => {
//         if (err) {
//             return console.error(err);
//         }
//         resp.end(data.toString());
//     });
// })


// 2nd way  Reading From a stream

server.on('request',(req,resp)=>{
    const rstream = fs.createReadStream('input.txt')
    rstream.on('data',(chunkData)=>{
        resp.write(chunkData)
    });
    rstream.on('error',(err)=>{
        console.log(err);
        resp.end("file  not Found")
    })
    rstream.on('end',()=>{
        resp.end()
    })
})

server.listen(5000)