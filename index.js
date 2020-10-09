const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content)
    //     });
    // }

    // if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'nishi', age: 27 },
    //         { name: 'nitin', age: '29' }
    //     ];
    //     res.writeHead(200, { 'Content-type': 'application/json' });
    //     res.end(JSON.stringify(users))
    // };

    // build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // extension of file
    let extname = path.extname(filePath)

    // content type
    let contentType = 'text/html';

    // check extension and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
    }

    //read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-type': 'text/html' })
                    res.end(content, 'utf8')
                })
            } else {
                // some server error
                res.writeHead(500);
                res.end(`Server error: ${err.code}`)
            }
        } else {
            // success
            res.writeHead(200, { 'Content-type': contentType });
            res.end(content, 'utf8')
        }
    })

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));
