const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = {
    index: function(req, res) {
        Quote.find()
        .then(data => res.render("index"))
        .catch(err => res.json(err));   
    },

    
    create: function(req, res) {
        const q = new Quote();
        q.name = req.body.name;
        q.qot = req.body.quote;
        q.save()
            .then(newQuoteData => Quote.find()
                .then(data => res.render("result", {quotes: data}))
                .catch(err => res.json(err)))
            .catch(err => console.log(err));
    },

    view: function(req, res) {
        Quote.find()
        .then(data => res.render("result", {quotes: data}))
        .catch(err => res.json(err));
    }
};