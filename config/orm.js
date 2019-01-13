const db = require("./sqlConnection");
const { printQMarks, objToSql } = require("../util");
let queryStr;
let params;
let columns;
let condition;
let values;

// Object Relational Mapping for all our SQL statement functions
const orm = {
  all: function(tableName, cb) {
    queryStr  = `SELECT * FROM ${tableName};`
    db.query(queryStr, function(err, result) {
      !err    ? cb(result)  : console.error(err);
    });
  },
  findOne: function(tableName, targetID, cb) {
    condition = `ID = ${targetID}`
    queryStr  = `SELECT * FROM ${tableName} WHERE ${condition};`
    db.query(queryStr, function(err, result) {
      !err    ? cb(result)  : console.error(err);
    })
  },
  create: function(tableName, col, values, cb) {
    columns   = col.toString();
    params    = printQMarks(values.length);
    queryStr  = `INSERT INTO ${tableName} (${columns}) VALUES (${params})`
    db.query(queryStr, values, function(err, result) {
      !err    ? cb(result)  : console.error(err);
    });
  },
  update: function(tableName, objValues, targetID, cb) {
    values    = objToSql(objValues);
    condition = `ID = ${targetID}`
    queryStr  = `UPDATE ${tableName} SET ${values} WHERE ${condition}`
    db.query(queryStr, function(err, result) {
      !err    ? cb(result)  : console.error(err);
    });
  },
  delete: function(tableName, condition, cb) {
    queryStr  = `DELETE FROM ${tableName} WHERE ${condition}`
    db.query(queryStr, function(err, result) {
      !err    ? cb(result)  : console.error(err);
    });
  }
};

module.exports= orm;