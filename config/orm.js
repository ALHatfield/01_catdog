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
      if (err) throw err
      cb(result);
    });
  },
  create: function(tableName, col, values, cb) {
    columns = col.toString();
    params = printQuestionMarks(values.length);
    queryString = `INSERT INTO ${tableName} (${columns}) VALUES (${params})`;
    connection.query(queryString, values, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  update: function(tableName, objColumnValues, condition, cb) {
    columns = objToSql(objColumnValues);
    queryString = `UPDATE ${tableName} SET ${columns} WHERE ${condition}`;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  delete: function(tableName, condition, cb) {
    queryString = `DELETE FROM ${tableName} WHERE ${condition}`;
    connectoin.query(queryString, function(err, result) {
      if (err) throw err
      cb(result);
    });
  }
};

module.exports= orm;