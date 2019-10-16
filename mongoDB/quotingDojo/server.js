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


app.get("/", (req, res) => {
    Quote.find()
        .then(data => res.render("index"))
        .catch(err => res.json(err)); 
})
app.post("/quotes", (req, res) => {
    const q = new Quote();
    q.name = req.body.name;
    q.qot = req.body.quote;
    q.save()
        .then(newQuoteData => Quote.find()
            .then(data => res.render("result", {quotes: data}))
            .catch(err => res.json(err)))
        .catch(err => console.log(err));

})
app.get("/quotes", (req, res) => {
    Quote.find()
    .then(data => res.render("result", {quotes: data}))
    .catch(err => res.json(err));
})


// app.get('/', (request, response) => {
//     response.redirect("/index.html")
// });
app.listen(8000, () => console.log("listening on port 8000"));