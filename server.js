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
    case '/IMG_1057.JPG':
      sendFile( response, 'IMG_1057.JPG')
      break
    case '/Kyra_s_Resume_26__SWE_.pdf':
      sendFile( response, 'Kyra_s_Resume_26__SWE_.pdf')
      break
    default:
      response.end('404 Error: File not found.');
}
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
