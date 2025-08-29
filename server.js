const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request, response ) {
  let url = request.url;
  let path = url === '/' ? 'index.html' : url.replace(/^\//, '');

  if (fs.existsSync(path)) {
    sendFile(response, path);
  } else {
    response.end("404: Error: File Not Found");
  }
});

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     if (err) {
       response.writeHead(500, { 'Content-Type': 'text/plain' });
       response.end('500: Internal Server Error');
       return;
     }
     // Set Content-Type based on file extension
     let ext = filename.split('.').pop().toLowerCase();
     let contentType = 'text/plain';
     if (ext === 'html') contentType = 'text/html';
     else if (ext === 'css') contentType = 'text/css';
     else if (ext === 'js') contentType = 'text/javascript';
     else if (ext === 'png') contentType = 'image/png';

     response.writeHead(200, { 'Content-Type': contentType });
     response.end(content);
   })
}
