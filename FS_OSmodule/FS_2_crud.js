const { error } = require('console');
const fs = require('fs')
// 1. create a folder named safix
// fs.mkdirSync('safix')

// 2. create a file in that folder named it bio.txt and insert data into it
// fs.writeFileSync('safix/bio.txt', 'my name is saffix')

// 3. Add more data with the existing data in the file
// fs.appendFileSync('safix/bio.txt','how are you')


// 4. Read the data without getting buffer data at first
// fs.readFileSync('safix/bio.txt')
const data = fs.readFileSync('./file.txt','utf-8')
    console.log(data);                                              // utf-8 ===encoding concept

    
// 5. Rename the file name to mybio.txt
// fs.renameSync('safix/bio.txt','safix/mybio.txt')

// 6. Now delete both the file   
// fs.unlinkSync('safix/mybio.txt');

// 7. delete the folder
// fs.rmdirSync('safix');

// 8. Check Status
console.log(fs.statSync('file.txt'))
console.log(fs.statSync('./file.txt').isFile())

// 9.Copy File
fs.cpSync('file.txt','readWrite.txt')