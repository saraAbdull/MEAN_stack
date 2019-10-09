const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);


app.get("/", (req, res) => {    
    res.render('index');
})
io.on('connection', function (socket) { //opens socket

  socket.on('posting_form', function (data) {
    console.log(data)
    socket.emit('updated_message', { msg: "*You emitted the following information to the server:<br>{name:'"+data.name+"',location: '"+data.location+"',lang: '"+data.lang+"',comment: '"+data.comment+"'}" });
    socket.emit('random_number', { msg: "Your lucky number emitted by the server is "+Math.floor(Math.random() * 100) + 1 }); //3

  });
    
});
