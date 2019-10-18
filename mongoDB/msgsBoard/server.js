const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/first', {useNewUrlParser: true});

const cmntSchema = new mongoose.Schema({
    comment: {type: String, required: [true, "A name is required"]},
    name: {type: String, required: [true, "A name is required"]},
    }, {timestamps: true})

const messageSchema = new mongoose.Schema({
    name:{type: String, required: [true, "The name is required"]},
    msg: {type: String, required: [true, "The message is required"]},
    comments: [cmntSchema]
    }, {timestamps: true})

// create an object to that contains methods for mongoose to interface with MongoDB
const Comment = mongoose.model('Comment', cmntSchema);
const Message = mongoose.model('Message', messageSchema);


app.get("/", (req, res) => { 
    Message.find()
        .then(data => res.render("index", {msgs: data}))
        .catch(err => res.json(err));  
})
app.post("/addMsg", (req, res) => {
    console.log(req.body) 
    const message = new Message();
    message.name = req.body.name;
    message.msg = req.body.msg;
    message.save()
        .then(newUserData => res.redirect('/'))
        .catch(err => console.log(err));
})
app.post("/addCmnt/:id", (req, res) => {
    const comment = new Comment();
    comment.name = req.body.name;
    comment.comment = req.body.cmnt;
    comment.save()
        .then(newCmntrData => Message.findOneAndUpdate({_id: req.params.id}, {$push: {comments: newCmntrData}}, function(err, data){
            if(err)
                console.log(err)
            else 
                res.redirect('/')
        })
        )
        .catch(err => console.log(err));
})

app.listen(8000, () => console.log("listening on port 8000"));