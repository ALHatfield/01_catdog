const cat = require('../models/cat');

module.exports = {
  findAll: function(req, res) {    
    cat.all(function(data) {
      res.json(data);
    })
  },
  findById: function(req, res) {},
  create: function(req, res) {},
  update: function(req, res) {},
  remove: function(req, res) {}
};