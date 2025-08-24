const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html', 'text/html' )
      break
    case '/index.html':
      sendFile( response, 'index.html', 'text/html' )
      break
    case '/style.css':
      sendFile(response, 'style.css', 'text/css')
      break
    case '/public/Doodle_Art_Converted.jpg':
      sendFile(response, 'public/Doodle_Art_Converted.jpg', 'image/jpeg') // be careful with relative path and absolute path, if we use "/" the file system FS later will understand we want to start from C:/ in the hard-disk
      break
    case '/spin-animation.js':
      sendFile(response, 'spin-animation.js', 'text/javascript')
      break
    default:
      response.writeHead(404); // if there is no writeHead, it will send default status as '200'
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port, function(){
  console.log("backend is running")
})

//send content of the file and type of that content
const sendFile = function( response, filename, contentType) {
   fs.readFile( filename, function( err, content ) {
     if (err) {
      response.writeHead(500);
      response.end('Server Error');
      console.log("server error");
      return;
     }

     response.writeHead(200, {'Content-Type': contentType}); // sending status code and contentType in header of http 
     response.end(content); // send content in the body of html
   })
}
