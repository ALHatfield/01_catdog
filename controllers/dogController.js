const db = require("../models/dog");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.find({})
      .then(function(data) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(data);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  },
  // findById: function(req, res) {},
  // create: function(req, res) {},
  // update: function(req, res) {},
  // remove: function(req, res) {}
};