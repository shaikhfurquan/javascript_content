/*
Streams:-
Streams are a fundamental concept in Node.js that allow you to handle large amounts of data efficiently. They provide a way to process data in chunks, rather than loading the entire dataset into memory.
*/

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