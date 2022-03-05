const CSVTOJSON = require("csvtojson");
const ipl = require("./ipl");

CSVTOJSON()
  .fromFile("./data/matches.csv")
  .then((matches) => {
    // console.log(matches[0]);
    //   console.log(ipl.matchesPerYear(matches));
    // console.log(ipl.arrayOfYears(matches));
    // console.log(ipl.arrayOfWinners(matches));
    // console.log(ipl.matchesPlayedInAYear(matches, 2016));
    // console.log(ipl.matchesWonPerTeamPerYear(matches));
    console.log(ipl.countOfTeamWinningTossAndMatch(matches));
  CSVTOJSON()
  .fromFile("./data/deliveries.csv")
  .then((deliveries) => {
    // console.log(deliveries);
    // console.log(ipl.extraRunsConcededPerTeamInAYear(matches, deliveries, 2016));
    // console.log(ipl.economicalBowlersInAYear(matches, deliveries, 2015, 10));
  });
});
