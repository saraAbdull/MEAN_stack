const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);

var msgs = []    

app.get("/", (req, res) => {
    res.render('index', {chat:msgs});
})
io.on('connection', function (socket) { //opens socket
  socket.emit('previous_chat', {chat:msgs});

  socket.on('send_msg', function (data) {
    console.log(msgs)
    msgs.push(data.name+": "+data.msg+"\n")
    io.emit('view_msg', {msg: data.name+": "+data.msg+"\n"});
  });
  
});
