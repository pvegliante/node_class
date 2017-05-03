var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 1775;

var items = [];
var id = 0;

var updateId = function(req, res) {
  if(!req.body.id) {
    id++
    req.body.id = id + '';
  }
}

app.use(express.static('Iclient'));
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

app.get('/item', function(req, res) {
  res.json(items);
});

app.get('/item/:id', function(req, res) {
  var item = req.item;
  res.json(itme || {});
});

app.post('/items', function(req, res) {
  var item = req.body;

  item.push(item);
  res.json(item);
});

app.put('/items/:id', function(req, res) {
  var update = req.body;
  if(update.id) {
    delete update.id;
  }
});






app.listen(PORT);
