const connection = require("./sqlConnection");
const { printQuestionMarks, objToSql } = require("../util");
let queryString;
let params;
let columns;

// Object Relational Mapping for all our SQL statement functions
const orm = {
  all: function(tableName, cb) {
    queryString = `SELECT * FROM ${tableName};`;
    connection.query(queryString, function(err, result) {
      !err ? cb(result) : console.error(err);
    });
  },
  findOne: function(tableName, condition, cb) {
    queryString = `SELECT * FROM ${tableName} WHERE ${condition};`
    connection.query(queryString, function(err, result) {
      !err ? cb(result) : console.error(err);
    })
  },
  create: function(tableName, col, values, cb) {
    columns = col.toString();
    params = printQuestionMarks(values.length);
    queryString = `INSERT INTO ${tableName} (${columns}) VALUES (${params})`;
    connection.query(queryString, values, function(err, result) {
      console.log(result);
      !err ? cb(result) : console.error(err);
    });
  },
  update: function(tableName, objColumnValues, condition, cb) {
    columns = objToSql(objColumnValues);
    queryString = `UPDATE ${tableName} SET ${columns} WHERE ${condition}`;
    connection.query(queryString, function(err, result) {
      !err ? cb(result) : console.error(err);
    });
  },
  delete: function(tableName, condition, cb) {
    queryString = `DELETE FROM ${tableName} WHERE ${condition}`;
    connectoin.query(queryString, function(err, result) {
      !err ? cb(result) : console.error(err);

    });
  }
};

module.exports= orm;