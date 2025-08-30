const { text } = require('stream/consumers')

const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
                        // const url = request.url 
                        // if (fs.existsSysnc(url))
  switch(request.url) { //switch( url )
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
          case '/style.css':
      sendFile( response, 'styles.css')
      break
    default:
      response.end( '404 Error: File Not Found' ) //sendFile(response,url)
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
