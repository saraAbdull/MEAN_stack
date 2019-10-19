const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/first', {useNewUrlParser: true});
const AnimalSchema = new mongoose.Schema({
    name: String,
    count: String,
    desc: String
   }, {timestamps: true})
mongoose.model('Animal', AnimalSchema);