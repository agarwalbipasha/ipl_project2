const express = require("express");
const CSVTOJSON = require("csvtojson");
// const path = require("path");
const app = express();
// const iplIndex = require("./src/server/index");
const { fileMatches, matchesPerYear } = require("./src/server/ipl");

console.log(fileMatches);

let match;

async function convertToJson() {

 await CSVTOJSON()
  .fromFile("./src/data/matches.csv")
  .then((data) => {
    match = data;
    // console.log(data);
    // console.log(matchesPerYear(data))
  });
}

convertToJson();
console.log("match: ", match);


// console.log(matchesPerYear);

// matchesPerYear(match).then((result) => result);

app.use(express.static("public"));

// app.use("/matchesPerYear", iplIndex.matchesPerYear);

app.get("/", (req, res) => {
  //   res.json(iplIndex.matchesPerYear);
  res.send("Hello World!");
});

// app.get("/matchesPerYear", (req, res) => {
//   res.send(matchesPerYear);
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
