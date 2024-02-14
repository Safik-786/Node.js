const fs = require('fs')
// import fs from ('fs')
fs.writeFile('file.txt','today is a awesome day :',(err,data)=>{             // it has one parameter
    console.log(data);
    console.log('File is created');
    console.log(err);
})
fs.appendFile('file.txt', 'please subscribe my channel ', function(err,data){
    console.log('successful');
})
fs.readFile('file.txt','utf-8',(err, data)=>{
    console.log(err);
    console.log(data);
})