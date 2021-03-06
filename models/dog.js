const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: { type: String, required: true },
  breed: { type: String, required: false },
  age: { type: Number, required: true},
  date: { type: Date, default: Date.now },
  description: { type: String, required: false },
});

const Dog = mongoose.model(process.env.MONGODB_COLLECTION, dogSchema);

module.exports = Dog;
