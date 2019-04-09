

const mongoose = require("mongoose");
const db = require("../models/dog");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI);

const dogSeed = [
  {
    name: "Lassy",
    breed: "golden retriever",
    age: 3,
    description: null,
    date: new Date(Date.now()),
  },
  {
    name: "Sammy",
    breed: "yellow labrador",
    age: 3,
    description: null,
    date: new Date(Date.now())
  },
  
  {
    name: "Lady",
    breed: "pointer",
    age: 3,
    description: null,
    date: new Date(Date.now())
  },
  {
    name: "Whiskey",
    breed: "yellow labrador",
    age: 3,
    description: null,
    date: new Date(Date.now())
  }  
];

db.remove({})
  .then(() => db.collection.insertMany(dogSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
