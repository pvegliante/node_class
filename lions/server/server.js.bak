var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
var morgan = require('morgan');
var mongoose = require('mongoose');

mongoose.connect('mongodb://pete:kissmyass2006@ds133311.mlab.com:33311/newlion')

var lionRouter = require('./lions');
var tigerRouter = require('./tigers');

app.use(morgan('dev'));
app.use(express.static('clients'));
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

//this is called mounting. when a request comes in for
// /Lion, we want to use this router.
app.use('/lions', lionRouter);
app.use('/tigers', tigerRouter);

app.use(function(err, req, res, next) {
  if(err) {
    res.status(500).send(error);
  }
})

app.listen(3000);
