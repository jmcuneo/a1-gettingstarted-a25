const http = require('http'),
    fs   = require('fs'),
    port = 3000

const server = http.createServer(function(request, response) {
    switch (request.url) {
        case '/':
        case '/index.html':
            sendFile(response, 'index.html', 'text/html')
            break

        case '/style.css':
            sendFile(response, 'style.css', 'text/css')
            break

        case '/script.js':
            sendFile(response, 'script.js', 'application/javascript')
            break

        default:
            response.writeHead(404, { 'Content-Type': 'text/plain' })
            response.end('404 Error: File Not Found')
    }
})

server.listen(process.env.PORT || port)

const sendFile = function(response, filename, contentType) {
    fs.readFile(filename, function(err, content) {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'text/plain' })
            response.end('500 Internal Server Error')
        } else {
            response.writeHead(200, { 'Content-Type': contentType })
            response.end(content, 'utf-8')
        }
    })
}
