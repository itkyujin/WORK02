var http = require("http");

function onRequest(request, response) {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Student Name : Kyujin Kim, Student ID: 200442930");
    response.end();

}

http.createServer(onRequest).listen(8000);