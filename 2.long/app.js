let express = require('express');
let app = express();

app.use(express.static(__dirname))

app.get('/clock', function(req, res) {
  let $timer = setInterval(function () {
    let date = new Date();
    let seconds = date.getSeconds()
    if (seconds % 5 == 0) {
      res.send(new Date().toLocaleString())
      clearInterval($timer)
    }
  }, 1000)
})

app.listen(9000);