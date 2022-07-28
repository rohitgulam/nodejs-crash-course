const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Check the path and dispay content according to the path
    /* if(req.url ==='/'){
        // Import file 
        fs.readFile(path.join(__dirname, '/public', 'index.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })
    }

    if(req.url ==='/about'){
        // Import file 
        fs.readFile(path.join(__dirname, '/public', 'about.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })
    }

    // Serve json data (API)
    if(req.url ==='/api/users'){
        // Manually create data (otherwise taken from DB)
        const users = [
            {name: "James Cameroon", age: 24},
            {name: "Jorja Smith", age: 29}
        ]
        res.writeHead(200, { 'Content-TYpe': 'application/json' });
        res.end(JSON.stringify(users));
    } */ //THIS IS NOT AN EFFECTIVE WAY

    // WAY 2
    // Build file path
    let filePath = path.join(__dirname, '/public', req.url === '/' ? 'index.html' : req.url)

    // Extension of file 
    let extname = path.extname(filePath);

    // Setting content-type
    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type 
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.json':
            contentType = 'application/json'
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.jpg':
            contentType = 'image/jpg'
            break;

    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // PAge not found error 404
            if (err.code == 'ENOENT') {
                fs.readFile(path.join(__dirname, '/public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                })
            }else{
                // Server error 500
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`)
            }
        } else{
            res.writeHead(200, { 'Content-Type' : contentType});
            res.end(content, 'utf8')
        }
    })


})

const port = process.env.PORT || 8000

server.listen(port, () => {console.log(`Server running on port ${port}`)})