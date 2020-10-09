const path = require('path')

// base file name
console.log(path.basename(__filename));

// directory anme
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename).base);

// concatinate paths
console.log(path.join(__dirname, 'test', 'hello.html'));



