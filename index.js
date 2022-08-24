const fs = require('fs');

fs.mkdir('test',(err) => {
    console.log('folder created');
});

fs.writeFile('./test/asyncCRUD.txt',"My name is Shivashish Bhaskar",(err)=>{
    console.log('text file created')
})

fs.readFile('./test/asyncCRUD.txt','utf-8',(err,data)=>{
    console.log(data)
});

fs.rename('./test/asyncCRUD.txt','./test/asyncFS.txt',(err) => {
    console.log('File Renamed');
})

fs.unlink('./test/asyncFS.txt',(err)=>{
    console.log('File deleted')
})

fs.rmdir('./test',(err)=>{console.log('folder deleted')});
