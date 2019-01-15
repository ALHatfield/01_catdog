const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Dog = mongoose.model(process.env.MONGODB_COLLECTION, dogSchema);

module.exports = Dog;
