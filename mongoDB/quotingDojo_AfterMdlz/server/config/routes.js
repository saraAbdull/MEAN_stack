const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports= function (app){
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
}