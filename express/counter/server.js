const express = require("express");
const app = express();

const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/", (req, res) => {
    if (req.session.count){
        req.session.count+=1
    }
    else
        req.session.count =1
    res.render('index',{count: req.session.count });
})
app.get("/reset", (req, res) => {
    req.session.count =0
    res.redirect('/');
})
app.get("/twice", (req, res) => {
        req.session.count+=1
    res.redirect('/');
})


app.listen(8000, () => console.log("listening on port 8000"));
