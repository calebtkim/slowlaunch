const http = require('http');

const server = http.createServer((request, response) => {
 var hc = request.url;
 if(hc=="/hc") {
    console.log('received health check');
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Healthy");
    return
 }
 
 startTime  = new Date().getTime(); 
 factorial(1);
 endTime = new Date().getTime();
 console.log(endTime - startTime)
 
 response.writeHead(200, { "Content-Type": "text/plain" });
 response.end("Hello 3002 :) !!");
 return;
});

function factorial(n) {
  var result = 1;
  for (var i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log('Server awake');
console.log('Server is now listening');
server.listen(3002);
