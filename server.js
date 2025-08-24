const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request, response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html', 'text/html' )
      break
    case '/index.html':
      sendFile( response, 'index.html', 'text/html' )
      break
    case '/styles.css':
      sendFile( response, 'styles.css', 'text/css' )
      break
    case '/me.png':
      sendFile( response, 'me.png', 'image/png' )
      break
    case '/githubIcon.png':
      sendFile( response, 'githubIcon.png', 'image/png' )
      break
    case '/linkedinIcon.png':
      sendFile( response, 'linkedinIcon.png', 'image/png' )
      break
    default:
      response.writeHead(404)
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename, contentType ) {
   fs.readFile( filename, function( err, content ) {
     if (err) {
       response.writeHead(404)
       response.end('404 Error: File Not Found')
       return
     }
     response.writeHead(200, { 'Content-Type': contentType || 'application/octet-stream' })
     response.end( content )
   })
}
