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
    let columns = ["name", "sleepy"]
    let values = [req.body.name, req.body.sleepy]
    cat.create(columns, values, function(data) {
      res.json(data);
    })
  },
  update: function(req, res) {},
  remove: function(req, res) {}
};