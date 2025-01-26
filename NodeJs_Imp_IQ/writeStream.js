const fs = require('fs');
const content = 'I Love Coding...'

let writeStream = fs.createWriteStream('output.txt')
writeStream.write(content, 'utf-8')
writeStream.end()

writeStream.on('finish', () =>{
    console.log('Write completed...');
})