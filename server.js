const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {  //first response is request from user,  next is response back from server
  
	const url = "." + request.url; //find the url from the user request
	
	if (fs.existsSync(url)){ //does this file exist?

		switch( url ) { 
   			case '/':
     				sendFile( response, 'index.html' )
     		 		break
   
    			default:
				sendFile(response, url); 
  		}
	}
	else {
		response.end("404: Error. File does not exist.");
	}

})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {

	let filetype = 'text/html';

	if (filename.endsWith('.css')){
		filetype = 'text/css';
	}
	else if (filename.endsWith('.jpg'){
		filetype = 'image/jpeg';
	}
	else if (filename.endswith('.js'){
		filetype = 'application/javascript';
	}


     response.end( content, 'utf-8' );
   })
}
