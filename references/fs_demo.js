// FIle system module

const fs = require('fs');
const path = require('path');

// create folder
/* fs.mkdir(path.join(__dirname, '/test') , {}, (err) => {
    if(err) throw err; 
    console.log('Folder created');
}); */

/* //  append to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt') , 'Hello, world!', (err) => {
    if(err) throw err; 
    console.log('file created');
    // Append file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love NodeJS', 
    err => {
        if(err) throw err;
        console.log('file apppended');
    })
}); */

// Read File 
/* fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})
 */

// Rename a file 
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if (err) throw err;
    console.log('File renamed');

})




