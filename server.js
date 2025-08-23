const http = require('http'),
      fs   = require('fs'),
      path = require('path'), // given by ChatGPT when debugging
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
        sendFile( response, 'index.html' )
        break
    case '/index.html':
        sendFile( response, 'index.html' )
        break
    case '/mystyles.css':
        sendFile( response, 'mystyles.css' )
        break
    case '/myphoto.jpg':
        sendImage( response, 'myphoto.jpg' )
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

const sendImage = function( response, filename ) {
    const fullPath = path.join(__dirname, filename);
    fs.readFile( fullPath, function( err, content ) {
        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
        response.end(content);
    })
}
