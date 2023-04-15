const http = require("http");

// custom moudle
const routes = require("./Router");
console.log(routes.information);
// const textval = require("./form.txt");
const server = http.createServer(routes.myhandler);

server.listen(3000, () => {
  console.log("3000 port called");
});
