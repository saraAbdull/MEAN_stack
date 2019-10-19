const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/first', {useNewUrlParser: true});
const QuoteSchema = new mongoose.Schema({
    name: String,
    qot: String
   }, {timestamps: true})
mongoose.model('Quote', QuoteSchema);