const path = require("path");

exports.getSuccess = (req, res, next) => {
  res.send(`<h1> "Form successfuly filled"</h1>`);
  //   res.sendFile(path.join(__dirname, "../", "view", "contactus.html"));
};
