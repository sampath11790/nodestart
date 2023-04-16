const path = require("path");

exports.getContactus = (req, res, next) => {
  //   res.send(`<h1>contactus page</h1>`);
  res.sendFile(path.join(__dirname, "../", "view", "contactus.html"));
};
