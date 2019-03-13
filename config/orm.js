const db = require("./sqlConnection");
const { printQMarks, objToSql } = require("../util");


const orm = {
  all: function(tableName, cb) {
    let queryStr  = `SELECT * FROM ${tableName};`
    db.query(queryStr, function(err, result) {
      !err  
        ? cb(result)  
        : console.error(err);
    });
  },
  findOne: function(tableName, targetID, cb) {
    let condition = `ID = ${targetID}`
    let queryStr  = `SELECT * FROM ${tableName} WHERE ${condition};`
    db.query(queryStr, function(err, result) {
      !err    
        ? cb(result)  
        : console.error(err);
    })
  },
  create: function(tableName, col, values, cb) {
    let columns   = col.toString();
    let params    = printQMarks(values.length);
    let queryStr  = `INSERT INTO ${tableName} (${columns}) VALUES (${params})`
    db.query(queryStr, values, function(err, result) {
      !err    
        ? cb(result)  
        : console.error(err);
    });
  },
  update: function(tableName, objValues, targetID, cb) {
    let values    = objToSql(objValues);
    let condition = `ID = ${targetID}`
    let queryStr  = `UPDATE ${tableName} SET ${values} WHERE ${condition}`
    db.query(queryStr, function(err, result) {
      !err    
        ? cb(result)  
        : console.error(err);
    });
  },
  delete: function(tableName, targetID, cb) {
    let condition = `ID = ${targetID}`;
    let queryStr  = `DELETE FROM ${tableName} WHERE ${condition}`
    db.query(queryStr, function(err, result) {
      !err    
        ? cb(result)  
        : console.error(err);
    });
  }
};

module.exports= orm;