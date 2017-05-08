var mongoose = require('mongoose');
var _ = require('lodash');
var lionRouter = require('express').Router();
var Lion = require('../models/lions');

// var lions = [];
// var id = 0;

// var updateId = function(req, res, next) {
//   if(!req.body.id) {
//     id++;
//     req.body.id = id + '';
//   }
//   next();
// };

// lionRouter.param('id', function(req, res, next, id) {
//   var lion = _.find(lions, {id: id});
//
//   if(lion) {
//     req.lion = lion;
//     next();
//   }else{
//     res.send();
//   }
// });

lionRouter.get('/', function(req, res) {
  Lion.find((err, lions) => {
    if(err) {
      res.send(err);
    }
// mongoose sends information back in json format
    res.send(lions);
  });
});

lionRouter.get('/:id', function(req, res) {
    var lion = req.lion;
    res.json(lion || {});
});

lionRouter.post('/', function(req, res) {
  // recieve the json Lion object
  const lionObj = new Lion({
    name: req.body.name,
    age: req.body.age,
    pride: req.body.pride,
    gender: req.body.gender,
  });

  lionObj.save((err) => {
    if (err) {
      res.send(err);
    }

    res.json({message: 'Lion created'});
  });
});

lionRouter.put('/:id', function(req, res) {
  var update = req.body;
  if (update.id) {
    delete update.id;
  }

  var lion = _.findIndex(lions, {id: req.params.id});
  if (!lions[lion]) {
    res.send();
  } else {
    var updatedLion = _.assign(lions[lion], update);
    res.json(updatedLion);
  }
});

lionRouter.delete('/:id', function(req, res) {
    var lion = _.findIndex(lions, {id: req.params.id});
    if (!lions[lion]) {
        res.send();
    } else {
        var deletedLion = lions[lion];
        lions.splice(lion, 1);
        res.json(deletedLion);
    }
});

module.exports = lionRouter;
