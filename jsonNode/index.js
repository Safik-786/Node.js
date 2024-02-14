const fs = require('fs')
const bioData ={
    name : 'safik', 
    age : 20,
    channel : 'chocolyte'
};
console.log(bioData);   
// CONVERT OBJECT TO JSOM
const jsondata= JSON.stringify(bioData)
console.log(jsondata);
// console.log(jsondata["name"]);              // it is not the way to access json data

// CONVERT JSON TO OBJECT
// const objData = JSON.parse(jsondata);
// console.log(objData);

//INSERT THIS JSON DATA TO THE ANOTHER JSON FILE
fs.writeFile('jsonNode/jsondata.json',jsondata,(err)=>{
    console.log('Done');
})