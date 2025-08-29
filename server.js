other server

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
    if (err) { //if fails
      response.writeHead(500);
      response.end('Error');
	}
	else {
      	let contentType = 'text/html'; 
      	if (filename.endsWith('.css')) contentType = 'text/css';  //style.css was being read as a text/html file, so this overrides that

      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });
};
