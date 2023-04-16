const fs = require("fs");
const path = require("path");
exports.getAddProduct = (req, res, next) => {
  console.log("middleware two");

  return fs.readFile("user.txt", "utf8", (err, data) => {
    if (err) {
      data = "inbox is empty  @:)";
      console.log(err);
    }
    res.sendFile(path.join(__dirname, "../", "view", "admin.html"));
  });
};

exports.postProducts = (req, res, next) => {
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
};
