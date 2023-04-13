const http = require("http");

const server = http.createServer((req, res) => {
  console.log("this is create server function ");
});

server.listen(4000);
