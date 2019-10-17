const express = require("express");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/first', {useNewUrlParser: true});
const AnimalSchema = new mongoose.Schema({
    name: String,
    count: String,
    desc: String
   }, {timestamps: true})
   // create an object to that contains methods for mongoose to interface with MongoDB
   const Animal = mongoose.model('Animal', AnimalSchema);
   
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {
    Animal.find()
    .then(data => res.render("index", {animals: data}))
    .catch(err => res.json(err));
})
app.get("/mongooses/:id", (req, res) => {
    Animal.findOne({_id: req.params.id})
    .then(animal => {res.render("index", {animals: [animal]})})
    .catch(err => res.json(err));
})
app.get("/new", (req, res) => {
    Animal.find()
    .then(data => res.render("addForm"))
    .catch(err => res.json(err));
})
app.post("/mongooses", (req, res) => {
    const a = new Animal();
    a.name = req.body.name;
    a.count = req.body.count;
    a.desc=req.body.desc;
    a.save()
        .then(newAnimalData => res.redirect("/"))
        .catch(err => console.log(err));
})
app.get("/edit/:id", (req, res) => {
    Animal.find()
    .then(data => res.render("updateForm",{id: req.params.id}))
    .catch(err => res.json(err));
})
app.post("/mongooses/:id", (req, res) => {
    Animal.updateOne({_id: req.params.id}, {
        name: req.body.name,
        count : req.body.count,
        desc : req.body.desc,
    })
        .then(result => {res.redirect("/")})
        .catch(err => res.json(err));
})
app.get("/destroy/:id", (req, res) => {
    Animal.remove({_id: req.params.id})
    .then(deletedAnimal => {res.redirect("/")})
    .catch(err => res.json(err));
})


app.listen(8000, () => console.log("listening on port 8000"));