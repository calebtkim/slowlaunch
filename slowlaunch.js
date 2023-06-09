const http = require('http');

const server = http.createServer((request, response) => {
 var hc = request.url;
 if(hc=="/hc") {
    console.log('received health check');    
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Healthy");
    return
 }

 response.writeHead(200, { "Content-Type": "text/plain" });
 response.end("Hello 3002 :) !!");
});

console.log('Server sleeping');
setTimeout(function() {
   server.listen(3002);
   console.log('Server awake');
   console.log('Server is now listening');
}, 300000);
