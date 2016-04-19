// server tcsiwula-61993.onmodulus.net

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === 'verify_token') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
});
