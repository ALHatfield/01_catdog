// cat model calls ../config/orm.js

const orm = require("../config/orm");

const cat = {
  all: function(cb) {
    orm.all("cats", function(data) {
      cb(data);
    });
  },
  find: function(targetID, cb) {
    let condition = `id = ${targetID}`
    orm.findOne("cats", condition, function(data) {
      cb(data);
    })
  },
  create: function(values, cb) {
    let columns = ["name", "sleepy"];  // I hate this
    orm.create("cats", columns, values, function(data) {
      cb(data);
    })
  },
  update: function(condition, cb) {
    let columns = ["id", "name", "sleepy"]; // I hate this too
    orm.update("cats", columns, condition, function(data) {
      cb(data)
    })
  },
  delete: function(condition, cb) {}
};

module.exports = cat;