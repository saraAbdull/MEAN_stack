const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);

var color = "green"    

app.get("/", (req, res) => {
    res.render('index', {color:color});
})
io.on('connection', function (socket) { //opens socket

  socket.on('color', function (data) {
    color= data.color
    io.emit('back_color', {color:color});
  });
  
  io.emit('back_color', {color:color});

});
