const { log } = require('console');
const fs = require('fs');           // we have to use only fs not promise

fs.readFile('file.txt','utf-8',(error, data)=>{
    // console.log(error,"\n", data);
})// it will successfully execute  as  file.txt
fs.readFile('fidle.txt','utf-8',(error, data)=>{
    // console.log(error,"\n", data);
})// it will not successfully throw an error execute  as  fidle.txt is not available


//                 READ WRITE IN SYNCHRONOUS VERSION
// console.log('finish reading file');
// creating a new file
fs.writeFileSync('read.txt','welcome to my channel')
// to delete existing data and add some new text data into the file
fs.writeFileSync('read.txt', "my self saffix")
// to add the text data with existing data 
fs.appendFileSync('read.txt',"\n how are you ,i am fine thank you") 

const Buf_data = fs.readFileSync('read.txt')
console.log(Buf_data);
// While reading fron the file 
// node.js used an an aditional data type called buffer i.e not avail in js
//buffer is used to store binary data 
let data = Buf_data.toString()
console.log(data);

// rename File
fs.renameSync('read.txt', 'readWrite.txt')