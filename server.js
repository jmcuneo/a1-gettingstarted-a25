const http = require("http"),
  fs = require("fs"),
  port = 3000;

const server = http.createServer(function (request, response) {
  const url = request.url;
  if (url === "/" || url === "/index.html") {
    sendFile(response, "index.html");
  } else if (url.startsWith("/assets/")) {
    // Serve static asset files
    sendFile(response, "." + url);
  } else {
    response.statusCode = 404;
    response.end("404 Error: File Not Found");
  }
});

server.listen(process.env.PORT || port);

const sendFile = function (response, filename) {
  fs.readFile(filename, function (err, content) {
    if (err) {
      response.statusCode = 500;
      response.end("500 Error: Internal Server Error");
      return;
    }
    // Set content type based on file extension
    let contentType = "text/html";
    if (filename.endsWith(".css")) {
      contentType = "text/css";
    } else if (filename.endsWith(".js")) {
      contentType = "application/javascript";
    } else if (filename.endsWith(".png")) {
      contentType = "image/png";
    } else if (filename.endsWith(".jpg") || filename.endsWith(".jpeg")) {
      contentType = "image/jpeg";
    }
    response.writeHead(200, { "Content-Type": contentType });
    response.end(content);
  });
};
