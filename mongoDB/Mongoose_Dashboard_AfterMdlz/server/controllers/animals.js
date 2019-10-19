const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

module.exports = {
    index: function(req, res) {
    Animal.find()
        .then(data => res.render("index", {animals: data}))
        .catch(err => res.json(err));
    },

    
    byId: function(req, res) {
        Animal.findOne({_id: req.params.id})
        .then(animal => {res.render("index", {animals: [animal]})})
        .catch(err => res.json(err));
    },

    addForm: function(req, res) {
        Animal.find()
        .then(data => res.render("addForm"))
        .catch(err => res.json(err));  
    },
    add: function(req, res) {
        const a = new Animal();
        a.name = req.body.name;
        a.count = req.body.count;
        a.desc=req.body.desc;
        a.save()
            .then(newAnimalData => res.redirect("/"))
            .catch(err => console.log(err));
    },
    updateForm: function(req, res) {
        Animal.find()
        .then(data => res.render("updateForm",{id: req.params.id}))
        .catch(err => res.json(err));
    },
    update: function(req, res) {
        Animal.updateOne({_id: req.params.id}, {
            name: req.body.name,
            count : req.body.count,
            desc : req.body.desc,
        })
            .then(result => {res.redirect("/")})
            .catch(err => res.json(err));
    },
    remove: function(req, res) {
        Animal.remove({_id: req.params.id})
        .then(deletedAnimal => {res.redirect("/")})
        .catch(err => res.json(err));
    }
};