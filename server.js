const http = require('http'),
      fs   = require('fs'),
      path = require('path'),
      port = 3000

const server = http.createServer( function( request, response ) {
  const urlPath = request.url === '/' ? '/index.html' : request.url;
  const filePath = path.join(__dirname, urlPath);
  
  // Handle different file types
  switch( path.extname(urlPath) ) {
    case '.html':
      sendFile( response, filePath, 'text/html' );
      break;
    case '.css':
      sendFile( response, filePath, 'text/css' );
      break;
    case '.js':
      sendFile( response, filePath, 'text/javascript' );
      break;
    case '.png':
      sendFile( response, filePath, 'image/png', true );
      break;
    case '.jpg':
    case '.jpeg':
      sendFile( response, filePath, 'image/jpeg', true );
      break;
    default:
      if( request.url === '/' || request.url === '/index.html' ) {
        sendFile( response, 'index.html', 'text/html' );
      } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('404 Error: File Not Found');
      }
  }
});

server.listen( process.env.PORT || port );

const sendFile = function( response, filename, contentType, isBinary = false ) {
  const encoding = isBinary ? null : 'utf-8';
  
  fs.readFile( filename, encoding, function( err, content ) {
    if( err ) {
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.end('404 Error: File Not Found');
    } else {
      response.writeHead(200, {'Content-Type': contentType});
      response.end( content, encoding );
    }
  });
};