const express = require("express");
const path = require("path");
const routes = express.Router();

routes.get("/login", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "view", "login.html"));
});

module.exports = routes;

// routes.get("/login", (req, res, next) => {
//   res.send(
//     `<form onsubmit="" action="/admin/add-product" method="get">
//         <input type="text" id="firstname" name="firstname"><br>

//         <button type="submit">Add</button>
//         </form>
//         <script>
//         let form = document.getElementsByTagName("form");
//         form[0].addEventListener("submit", storename);
//         function storename(e) {
//             // e.preventDefault();
//             let firstname = document.getElementById('firstname').value;

//             localStorage.setItem('name', firstname);
//         }
//     </script>

//       `
//   );
// });
