let express = require('express');
let app = express();

app.use(express.static(__dirname))

app.listen(9000);

let WebSocketServer = require('ws').Server;
let server = new WebSocketServer({
  port: 3000
});

server.on('connection', function (socket) {
  // socket 插座
  console.log('2.服务端监听到了客户端的连接')
  // 监听客户端发过来的消息
  socket.on('message', function (message) {
    console.log('4.客户端连接过来的消息', message)
    socket.send('5.服务器说：' + message)
  })
})