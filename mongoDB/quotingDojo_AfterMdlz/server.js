const express = require("express");
const app = express();

require("./server/models/quote.js")
   
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');
app.use(express.static(__dirname + '/client/static'));
app.use(express.urlencoded({extended: true}));


require("./server/config/routes.js")(app)

app.listen(8000, () => console.log("listening on port 8000"));