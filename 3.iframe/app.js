let express = require('express');
let app = express();

app.use(express.static(__dirname))

app.get('/clock', function(req, res) {
  res.header('Contnet-Type', 'text/html');
  setInterval(function() {
    // res.send是原生的write加end
    res.write(`
      <script>
        parent.setTime('${new Date().toLocaleString()}')
      </script>
    `)
  }, 1000)
})

app.listen(9000);