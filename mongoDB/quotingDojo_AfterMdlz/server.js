const express = require("express");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/first', {useNewUrlParser: true});
const QuoteSchema = new mongoose.Schema({
    name: String,
    qot: String
   }, {timestamps: true})
   // create an object to that contains methods for mongoose to interface with MongoDB
   const Quote = mongoose.model('Quote', QuoteSchema);
   
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));


require("./server/config/routes.js")(app)
app.listen(8000, () => console.log("listening on port 8000"));