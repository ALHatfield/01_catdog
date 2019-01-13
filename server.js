const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./routes");
const { logConnection } = require("./util");

// mongoose middleware
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Animals");

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.listen(PORT, logConnection(PORT));
