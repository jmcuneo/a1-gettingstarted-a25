const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/style.css':
      sendFile( response, 'style.css' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function(response, filename) {
  fs.readFile(filename, function(err, content) {
    if (err) {
      response.writeHead(500);
      response.end('500 Error: Internal Server Error');
    } else {
      let contentType = 'text/html'; // default
      if (filename.endsWith('.css')) contentType = 'text/css';

      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });
};
