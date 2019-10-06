const express = require("express");
const app = express();
// app.get('/', (request, response) => {
//     response.redirect("/index.html")
// });
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
console.log(__dirname)