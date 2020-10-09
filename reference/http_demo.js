const http = require('http')

// create a server
http.createServer((req, res) => {
    // write res
    res.write('Hello world!')
    res.end()
}).listen(5000, () => console.log('server running'));