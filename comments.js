// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.html', (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('File not found!');
    }
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});