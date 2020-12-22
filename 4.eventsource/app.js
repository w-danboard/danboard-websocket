let express = require('express');
let app = express();

app.use(express.static(__dirname))

let counter = 0;
app.get('/clock', function(req, res) {
  res.header('Content-Type', 'text/event-stream');
  let timer = setInterval(function () {
    res.write(`id:${counter++}\nevent:message\ndata:${new Date().toLocaleString()}\n\n`);
  }, 1000)
  res.on('close', function () {
    clearInterval(timer)
  })
})

app.listen(9000);