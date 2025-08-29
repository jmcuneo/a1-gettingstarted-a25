const http = require('http'),
    fs   = require('fs'),
    path = require('path'),
    port = 3000


// This is where i implemneted code from chatgpt to alo for the displaying of
const server = http.createServer( function( request,response ) {
    let filename = request.url === '/' ? 'index.html' : request.url.substring(1)

    fs.readFile(filename, function(err, content) {
        if (err) {
            response.statusCode = 404
            response.end('404 Error: File Not Found')
        } else {
            response.end(content)
        }
    })
})

server.listen(process.env.PORT || port)


const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
