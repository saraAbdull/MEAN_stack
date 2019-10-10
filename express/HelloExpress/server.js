const express = require("express");
const app = express();
app.get('/', (request, response) => {
   response.send("Hello Express");
});
app.use(express.static(__dirname + "/static"));
app.listen(8000, () => console.log("listening on port 8000"));