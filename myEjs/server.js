var express = require('express');
var app = express();
const PORT = 7777;

var drinks = [
  {name: 'Bloody Mary', drunkness: 3},
  {name: 'Martini', drunkness: 5},
  {name: 'Scotch', drunkness: 10}
];

const tagline = 'If you do not practice node.js, you will forget what yu learn quickly!!';

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index', {
    drinks: drinks,
    tagline: tagline
  });
});

app.get('/flow', function(req, res) {
  res.render('pages/flow');
});

app.get('/keep', function(req, res) {
  res.render('pages/keep');
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
