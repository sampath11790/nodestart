const http = require("http");
const fs = require("fs");
// const textval = require("./form.txt");
const server = http.createServer((req, res) => {
  console.log("this is create server function ");
  // console.log(textval);

  if (req.url === "/") {
    fs.readFile("form.txt", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      }

      res.setHeader("Context-type", "text/html");
      res.write("<html>");
      res.write("<head><title>myapplication</title></head>");
      res.write(`<body><h1>${data}</h1>`);
      res.write(
        `<form action=/message method=POST><input type=text name=message><button>send</button></form></body>`
      );

      res.write("</html>");
      return res.end();
    });
    return;
    // console.log("2");
  } else if (req.url === "/home") {
    res.setHeader("Context-type", "text/html");
    res.write("<html>");
    res.write("<head><title>myapplication</title></head>");
    res.write("<body><h1>Welcome home</h1></body>");
    res.write(`</html>`);
    return res.end();
  } else if (req.url === "/about") {
    res.setHeader("Context-type", "text/html");
    res.write("<html>");
    res.write("<head><title>myapplication</title></head>");
    res.write("<body><h1>Welcome about page</h1></body>");
    res.write(`</html>`);
    return res.end();
  } else if (req.url === "/message" && req.method === "POST") {
    var body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      let parseBody = Buffer.concat(body).toString();
      let messageval = parseBody.split("=")[1];
      // console.log(messageval);
      fs.writeFileSync("form.txt", messageval);
      res.statusCode = 302;
      // res.write("<h1>some data sending</h1>");
      res.setHeader("Location", "/");

      return res.end();
    });
    // fs.writeFileSync("form.text", "dummy");

    // res.setHeader("Context-type", "text/html");
    // res.write("<html>");
    // res.write("<head><title>myapplication</title></head>");
    // res.write("<body><h1>i from form element thankyou</h1></body>");
    // res.write(`</html>`);
    // return res.end();
  }
  res.write("<body><h1>page not fount 404</h1></body>");
  return res.end();
});

server.listen(3000, () => {
  console.log("3000 port called");
});
