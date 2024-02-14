const { log } = require("console");
const http = require ("http");
const fs = require ("fs");
const url = require("url")
fs.writeFileSync("./log.txt","hello World  \n")     // if we write this line then with every call log.txt is created  and previous data has deleted
const myServer = http.createServer((req, resp)=>{


    if (req.url==="/favicon.ico") {
        return resp.end();
    }


    console.log("New request Record.");
    const log =`${Date.now().toLocaleString} : Request received from path: ${req.url} and request Method is: ${req.method} \n`


    const myurl = url.parse(req.url , true)             // !important
    console.log(myurl);


    fs.appendFile("./log.txt",log,(err , data)=>{
        resp.end("Hello from the Server Side")
    })
    // switch(req.url){
    switch(myurl.pathname){
        case "/" :
            // resp.end("Habibi! this is home Page");
            if(req.method==="GET")return resp.end("Welcome")
            break;
        case "/aboutus" :
            const userName = myurl.query.userId
            resp.end("Habibi Myself " + userName)
            break;
        case "/contact" :
            resp.end("Habibi Sukran for Contact me.")
            break;
            //  How google server handle
        case "/search" :
            const search = myurl.query.search_query
            resp.end("hare are your result for :"+ search)
            break;

        //  use this url:    http://localhost:8001/search?userId=rahul&pass=safik123&search_query=javaScript+Tic+Tac+Toe
          
        case "/signup" :
            if(req.method==="GET") resp.end("This is signup Page")
            else if(req.method==="POST"){
                // DB  query
                resp.end("Login Successfully.")
            }
            break;
        default:
            resp.end("4O4 Not Found")
    }

})
myServer.listen(8001, () => {
    console.log("Server is Started at 8001 port");
})