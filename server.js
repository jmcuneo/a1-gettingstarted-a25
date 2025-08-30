const http = require('http'),
      fs   = require('fs')
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html', 'text/html' )
      break
    case '/index.html':
      sendFile( response, 'index.html', 'text/html' )
      break
    case '/mystyle.css':
      sendFile(response, 'mystyle.css', 'text/css' )
      break
    case '/images/cr.JPG':
      sendFile(response, 'images/cr.JPG', 'text/jpg' )
      break
    case '/images/frosty.jpg':
      sendFile(response, 'images/frosty.JPG', 'text/jpg' )
      break
    case '/images/germany.JPG':
      sendFile(response, 'images/germany.JPG', 'text/jpg' )
      break
    case '/images/pr.JPG':
      sendFile(response, 'images/pr.JPG', 'text/jpg' )
      break
    
    default:
        response.writeHead(404, {'Content-Type': 'text/plain'})
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename, type ) {
   fs.readFile( filename, function( err, content) {
    if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' })
        response.end('500 Internal Server Error')
    } else {
        response.writeHead(200, { 'Content-Type': type})
        response.end(content)
    }
   })
}
