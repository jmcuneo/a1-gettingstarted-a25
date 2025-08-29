const http = require('http'),
      fs   = require('fs'),
      path = require('path'),
      port = 3000

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg'
}

const server = http.createServer((request, response) => {
  let filePath = request.url === '/' ? '/index.html' : request.url
  let extname = path.extname(filePath)
  let contentType = mimeTypes[extname] || 'text/plain'
  
  fs.readFile(`.${filePath}`, (err, content) => {
    if (err) {
      response.writeHead(404)
      response.end('404 Error: File Not Found')
    } else {
      response.writeHead(200, { 'Content-Type': contentType })
      response.end(content, 'utf-8')
    }
  })
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
