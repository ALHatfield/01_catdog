const cat = require('../models/cat');

module.exports = {
  findAll: function(req, res) {    
    cat.all(function(data) {
      res.json(data);
    })
  },
  findById: function(req, res) {
    cat.find(req.params.id, function(data) {
      res.json(data);
    })
  },
  create: function(req, res) {
    let values = [req.body.name, req.body.sleepy]
    cat.create(values, function(data) {
      res.json(data);
    })
  },
  update: function(req, res) {
    let condition = req.body;
    cat.update(condition, function() {
      res.json(data);
    })
  },
  remove: function(req, res) {}
};