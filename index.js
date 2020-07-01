const express = require("express");
const config = require("./config/index");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

let app = express();
let cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.dbURL);

mongoose.connection.on('error', (err) => {
  console.error("Database Connection Error: " + err);
  process.exit(2);
});

mongoose.connection.on('connected', () => {
  console.info("Succesfully connected to MongoDB Database");
  app.listen(config.port, function (err) {
    if (err) console.error(err);
    else console.log(`Running server at port ${config.port} `)
  });
});

module.exports.app = app;

require('./app/routes/links')