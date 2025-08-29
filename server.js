const http = require('http'),
      fs   = require('fs'),
      port = 3000


const server = http.createServer( function(request,response) {

    const url = "." + request.url;
    console.log("Request for:", url, "\n");

    if (fs.existsSync(url)) {

        switch (url) {
            case './':
                sendFile(response, 'index.html');
                break
            case './style_design.css':
                sendFile(response, 'style_design.css');
                break;
            default:
                sendFile(response, url);
        }
    } else {
        console.log("404, file " +  url   + " does not exist!\"");
        //response.end("404, file does not exist!")
    }


}
)


server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {

    console.log("Sending file: ", filename);

    // css file kept being sent as plain text type.
    //https://www.tutorialpedia.org/blog/html-file-css-running-as-plain-text-in-browser/

        fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })

}
