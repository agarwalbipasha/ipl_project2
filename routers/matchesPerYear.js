const express = require("express");
const app = express();

// const matchesPerYear = require('../src/server/index');

app.get("/", (req, res) => {
  // res.json(matchesPerYear);
  res.send("Hello World!");
});

module.exports = app;
