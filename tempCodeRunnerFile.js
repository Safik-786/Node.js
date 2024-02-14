pendFile('file.txt', 'please subscribe my channel ', function(err){
    console.log('successful');
})
fs.readFile('file.txt','utf-8',(err, data)=>{
    console.log(err);
    console.log(data);
})