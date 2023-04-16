const express = require("express");
const fs = require("fs");
const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  console.log("middleware two");

  return fs.readFile("user.txt", "utf8", (err, data) => {
    if (err) {
      data = "inbox is empty  @:)";
      console.log(err);
    }
    res.send(`
    <form onsubmit="" action="/admin/product" method="POST">
    <input type="text" id="message" name="message"><br>
    <input type="hidden" id="name" name="name"><br>
    <button type="submit">Add</button>
    </form>
    <script>
    let form = document.getElementsByTagName("form");
    form[0].addEventListener("submit", storename);
    function storename(e) {
        // e.preventDefault();
        let message = document.getElementById('message').value;
        let name =localStorage.getItem('name');
        document.getElementById('name').value=name
        localStorage.setItem('message', message);
        
    }
</script>
${data}
`);
  });
});

routes.post("/product", (req, res, next) => {
  console.log(req.body);
  fs.writeFile(
    "user.txt",
    `${req.body.name}==>:${req.body.message} # ,`,
    { flag: "a" },
    (err) => {
      err ? console.log(err) : res.redirect("/admin/add-product");
    }
  );
  //   res.redirect("/");
});

module.exports = routes;
