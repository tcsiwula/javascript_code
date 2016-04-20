// server --  https://tcsiwula-61993.onmodulus.net
// fb docs -- https://developers.facebook.com/docs/messenger-platform
var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});


app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === 'tcsiwula') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
})

app.listen(process.env.PORT)