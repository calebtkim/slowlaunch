const http = require('http');

const server = http.createServer((request, response) => {
 var hc = request.url;
 if(hc=="/hc") {
    console.log('received health check');
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Healthy");
    return
 }

 response.setHeader("application-startup-duration", 1);
 response.writeHead(200, { "Content-Type": "text/plain" });
 response.end("Hello 3002 :) !!");
});

console.log('Server sleeping');
function sleep(ms) {
  var start = Date.now();
  while(Date.now() - start < ms) {
    ;
  }
}

var start = Date.now();
var end = start + 310000; // 3 minutes
for (var i = 0; ; i++) {
  console.log(Date.now() + " " + i + " "+ factorial(i));
  sleep(2000)
  if (Date.now() > end) {
    break;
  }
}

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
