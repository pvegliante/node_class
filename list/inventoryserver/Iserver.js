var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
var morgan = require('morgan');
var PORT = 1775;

var items = [];
var id = 0;

var updateId = function(req, res, next) {
  if(!req.body.id) {
    id++
    req.body.id = id + '';
  }
  next();
};

app.use(morgan('dev'));
app.use(express.static('Iclient'));
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

app.get('/item', function(req, res, next, id) {
  var item = _.find(items, {id: id});

  if(item) {
    req.item = item;
    next();
  }else{
    res.send(items);
  }
});

app.get('/items', function(req, res) {
  res.json(items);
})
app.get('/items/:id', function(req, res) {
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

  var item =_.findIndex(items, {id: req.params.id});
  if (!lions[lion]) {
    res.send();
  }else{
    var updatedItem = _.assign(items[item], update);
    res.json(updatedItem);
  }
});

app.delete('/items/:id', function(req, res) {
  var item = _.findIndex(items, {id: req.params.id})
  if(!lions[lion]) {
    res.send();
  } else {
    var deletedItem = items[item];
    item.splice(item, 1);
    res.json(deletedItem);
  }
});

app.use(function(err, req, res, next) {
  if(err) {
    res.status(500).send(error);
  }
})


app.listen(PORT);
