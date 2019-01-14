const db = require("../models/dog");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db
      .find({})
      .then(data => res.json(data))
      .catch(data => res.json(err)
      )},
  findById: function(req, res) {
    db
      .findById(req.params.id)
      .then(data => res.json(data))
  },
  // create: function(req, res) {},
  // update: function(req, res) {},
  // remove: function(req, res) {}
};