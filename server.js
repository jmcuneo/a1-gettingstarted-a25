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
    case '/mystyles.css':
      sendFile( response, 'mystyles.css' )
      break
    case '/cat.png':
      sendFile( response, 'cat.png' )
      break
    case '/wpisign.png':
      sendFile( response, 'wpisign.png' )
      break
    case '/cat3.png':
      sendFile( response, 'cat3.png' )
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
