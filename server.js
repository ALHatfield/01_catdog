// dependencies
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;
const routes = require("./routes");
const { logConnection } = require("./util");

// mongoose middleware
mongoose.connect(process.env.MONGODB_URI);

// express middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.listen(PORT, logConnection(PORT));

