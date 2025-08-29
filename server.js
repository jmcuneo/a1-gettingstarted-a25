const http = require('http');
const fs   = require('fs');
const port = 3000;

const server = http.createServer((request, response) => {
  switch (request.url) {
    case '/':
    case '/index.html':
      sendFile(response, 'index.html');
      break;
    case '/style.css':
      sendFile(response, 'style.css');
      break;
    default:
      response.statusCode = 404;
      response.end('404 Error: File Not Found');
  }
});

server.listen(process.env.PORT || port);

function sendFile(response, filename) {
  fs.readFile(filename, (err, content) => {
    if (err) {
      console.error('Error loading', filename, err.code);
      response.statusCode = 500;
      response.end('Server Error');
    } else {
      response.end(content);
    }
  });
}
