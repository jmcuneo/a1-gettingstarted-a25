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
      response.setHeader('Content-Type', 'text/css')
      sendFile( response, 'mystyles.css' )
      break
    case '/sase.jpeg':
      response.setHeader('Content-Type', 'image/jpeg')
      sendFileRaw( response, 'sase.jpeg' )
      break
    case '/nails.jpeg':
      response.setHeader('Content-Type', 'image/jpeg')
      sendFileRaw( response, 'nails.jpeg' )
      break
    case '/app.js':
      response.setHeader('Content-Type', 'application/javascript')
      sendFile( response, 'app.js' )
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

//for images
const sendFileRaw = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content )
   })
}
