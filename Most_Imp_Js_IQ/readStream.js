const  fs =require('fs') ;
let content  = ''
 let readStream = fs.createReadStream('input.txt');

 readStream.on('data' , (chunk)=>{
    content += chunk
 })


 readStream.on('end', ()=>{
    console.log(content);
 })

 readStream.on('error' , (err)=>{
    console.log(err.stack);
 })