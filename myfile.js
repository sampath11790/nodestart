const http = require("http");

const server = http.createServer((req, res) => {
  console.log("this is create server function ");
  if (req.url === "/") {
    res.setHeader("Context-type", "text/html");
    res.write("<html>");
    res.write("<head><title>myapplication</title></head>");
    res.write("<body><h1>welcome to node js program</h1></body>");
    res.write("</html>");
    res.end();
  }
  if (req.url === "/home") {
    res.setHeader("Context-type", "text/html");
    res.write("<html>");
    res.write("<head><title>myapplication</title></head>");
    res.write("<body><h1>Welcome home</h1></body>");
    res.write(`</html>`);
    res.end();
  }
  if (req.url === "/about") {
    res.setHeader("Context-type", "text/html");
    res.write("<html>");
    res.write("<head><title>myapplication</title></head>");
    res.write("<body><h1>Welcome about page</h1></body>");
    res.write(`</html>`);
    res.end();
  }
  res.write("<body><h1>page not fount 404</h1></body>");
  res.end();
});

server.listen(3000, () => {
  console.log("3000 port called");
});
