const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
    switch (request.url) {
        case '/':
            sendFile(response, 'index.html')
            break
        case '/index.html':
            sendFile(response, 'index.html')
            break
        case '/Resume.pdf':
            sendFile(response, 'Resume.pdf')
            break
        case '/BSB.png':
            sendFile(response, 'BSB.png')
            break
        case '/US-ARMY-ROTC.svg.png':
            sendFile(response, 'US-ARMY-ROTC.svg.png')
            break
        case '/wpi-logo.webp':
            sendFile(response, 'wpi-logo.webp')
            break
        default:
            response.end('404 Error: File Not Found')
    }
})

// This was a Chgatgpt way to do this that i tryed to see if link would atleast work, ive updated to a less intutive method but one that i came up with myself
// let filename = request.url === '/' ? 'index.html' : request.url.substring(1)
//
// fs.readFile(filename, (err, content) => {
//     if (err) {
//         response.statusCode = 404
//         response.end('404 Error: File Not Found')
//     } else {
//         response.end(content)
//     }
// })


server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
