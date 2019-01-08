// cat model calls ../config/orm.js

const orm = require("../config/orm");

const cat = {
  all: function(cb) {
    orm.all("cats", function(data) {
      cb(data);
    });
  },
  create: function(cols, vals, cb) {},
  update: function(objColVals, condition, cb) {},
  delete: function(condition, cb) {}
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;