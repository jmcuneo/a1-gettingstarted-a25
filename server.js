const http = require('http'),
      fs   = require('fs'),
      port = 3000


const server = http.createServer( function( request,response ) {
  if(request.url === '/'){
    //Handles special case of base url
    sendFile(response, 'index.html');
  }
  else{
    //Handles other cases
    sendFile(response, './'+request.url); //Makes it so that the server bases the urls on the directory the server is running in, not the base directory of the device
  }
})

server.listen( process.env.PORT || port )

const sendFile = ( response, filename ) => {

    fs.readFile(filename, (err, content) => {
      if (err) response.end( '404 Error: File Not Found' ); //If there is an error reading the file it sends a 404 error
      response.end(content, 'utf-8')
    })


}
