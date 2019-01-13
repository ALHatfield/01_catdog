// cat model calls ../config/orm.js

const orm = require("../config/orm");
const tableName = "cats";               // todo#5
const objColumns = ["name", "sleepy"];  // todo #5

const cat = {
  all: function(cb) {
    orm.all(tableName, function(data) {
      cb(data);
    });
  },
  find: function(targetID, cb) {
    orm.findOne(tableName, targetID, function(data) {
      cb(data);
    })
  },
  create: function(values, cb) {
    orm.create(tableName, objColumns, values, function(data) {
      cb(data);
    })
  },
  update: function(objValues, targetID, cb) {
    orm.update(tableName, objValues, targetID, function(data) {
      cb(data)
    })
  },
  delete: function(condition, cb) {}
};

module.exports = cat;