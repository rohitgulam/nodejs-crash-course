// Using the path module 

const path = require('path');

// Base file
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// Extension name
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concatenate paths
// Create ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));