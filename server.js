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
    case '/rickroll.MP3':
      sendMP3(response, 'rickroll.MP3', request)
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}

const sendMP3 = function(response, filename, request) {
  fs.stat(filename, (err, stats) => {
    if (err) {
      response.writeHead(404);
      return response.end('File Not Found');
    }

    const range = request.headers.range;
    if (!range) {
      // No range header, send full file
      response.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stats.size,
        'Accept-Ranges': 'bytes'
      });
      fs.createReadStream(filename).pipe(response);
    } else {
      // Parse range
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
      const chunkSize = (end - start) + 1;

      response.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': 'audio/mpeg'
      });

      fs.createReadStream(filename, { start, end }).pipe(response);
    }
  });
};


