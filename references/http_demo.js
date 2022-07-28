const http = require('http');

http.createServer((req, res) => {
    // CReate a responses
    res.write('Hello world!');
    // End
    res.end();
}).listen(2000, ()=>{console.log("server running...")})