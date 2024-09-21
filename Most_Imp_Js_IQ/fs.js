/*
FS module:-
The Filesystem module in Node.js allows you to interact with the file system on your computer. 
It provides a way to read and write files, create and delete directories, and perform other file system operations.
*/

const fs = require('fs');

fs.writeFile('example.txt', 'Hello, world!', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('File written successfully!');
    }
  });


  fs.readFile("example.txt" , 'utf8' , (err , data)=>{
    if(err) console.log(err);
    else console.log(data);
  })