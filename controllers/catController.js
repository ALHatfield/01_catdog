const cat = require('../models/cat');

module.exports = {
  findAll: function(req, res) {    
    cat.all(data => res.json(data)
  )},
  findById: function(req, res) {
    cat.find(req.params.id, data => res.json(data))
  },
  create: function(req, res) {
    let values = [req.body.name, req.body.sleepy]
    cat.create(values, data => res.json(data))
  },
  update: function(req, res) {
    let values = req.body;
    let targetID = req.params.id;
    cat.update(values, targetID, data => res.json(data))  
  },
  remove: function(req, res) {
    let targetID = req.params.id;
    cat.delete(targetID, data => res.json(data))
  }
};