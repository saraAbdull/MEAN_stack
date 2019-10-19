const animals = require("../controllers/animals.js")

module.exports= function (app){

    app.get("/", (req, res) => {
        animals.index(req, res);
    })
    app.get("/mongooses/:id", (req, res) => {
        animals.byId(req, res);
    })
    app.get("/new", (req, res) => {
        animals.addForm(req, res);
    })
    app.post("/mongooses", (req, res) => {
        animals.add(req, res);
    })
    app.get("/edit/:id", (req, res) => {
        animals.updateForm(req, res);
    })
    app.post("/mongooses/:id", (req, res) => {
        animals.update(req, res);
    })
    app.get("/destroy/:id", (req, res) => {
        animals.remove(req, res);
    })
}