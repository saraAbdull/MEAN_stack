const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);

var count = 0    

app.get("/", (req, res) => {
    res.render('index', {count:count});
})
io.on('connection', function (socket) { //opens socket

  socket.on('increase', function (data) {
    count++
    io.emit('count', {count:count});

  });
  socket.on('reset', function (data) {
    count=0
    io.emit('count', {count:count});

  });

  io.emit('count', {count:count});

});
