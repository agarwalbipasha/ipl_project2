const CSVTOJSON = require("csvtojson");
const path = require('path');
const ipl = require("./ipl");

const fileMatches = path.join(__dirname, "../", "data", "matches.csv");
const fileDeliveries = path.join(__dirname, "../", "data", "deliveries.csv");

let match, matchesPerYear, matchesPlayedInAYear, matchesWonPerTeamPerYear, countOfTeamWinningTossAndMatch, playerOfTheMatchPerYear, extraRunsConcededPerTeamInAYear, economicalBowlersInAYear, strikeRateOfABatsmanEachSeason;

CSVTOJSON()
  .fromFile(fileMatches)
  .then((matches) => {
    match = matches;
    // console.log(match);
    matchesPerYear = ipl.matchesPerYear(matches);
    // matchesPlayedInAYear = ipl.matchesPlayedInAYear(matches, year);
    matchesWonPerTeamPerYear = ipl.matchesWonPerTeamPerYear(matches);
    countOfTeamWinningTossAndMatch = ipl.countOfTeamWinningTossAndMatch(matches);
    playerOfTheMatchPerYear = ipl.playerOfTheMatchPerYear(matches);
    // console.log(matches);
    // console.log(matchesPerYear);
    // console.log(ipl.arrayOfYears(matches));
    // console.log(ipl.arrayOfWinners(matches));
    // console.log(ipl.matchesPlayedInAYear(matches, 2016));
    // console.log(ipl.matchesWonPerTeamPerYear(matches));
    // console.log(ipl.countOfTeamWinningTossAndMatch(matches));
    // console.log(ipl.playerOfTheMatchPerYear(matches));
    CSVTOJSON()
      .fromFile(fileDeliveries)
      .then((deliveries) => {
        // console.log(deliveries);
        // extraRunsConcededPerTeamInAYear = ipl.extraRunsConcededPerTeamInAYear(matches, deliveries, year);
        // economicalBowlersInAYear = ipl.economicalBowlersInAYear(matches, deliveries, year, count);
        // strikeRateOfABatsmanEachSeason = ipl.strikeRateOfABatsmanEachSeason(matches, deliveries, batsman);
        // console.log(ipl.extraRunsConcededPerTeamInAYear(matches, deliveries, 2016));
        // console.log(
          // ipl.economicalBowlersInAYear(matches, deliveries, 2015, 10)
        // );
        // console.log(ipl.strikeRateOfABatsmanEachSeason (matches, deliveries, 'DA Warner'));
      });
  });


  // setTimeout(() => {
  //   console.log(match);
  // }, 1000);


 console.log(match)

  module.exports = {
    fileMatches,
    match,
    matchesPerYear, 
    matchesPlayedInAYear, 
    matchesWonPerTeamPerYear, 
    countOfTeamWinningTossAndMatch, 
    playerOfTheMatchPerYear, 
    extraRunsConcededPerTeamInAYear, 
    economicalBowlersInAYear, 
    strikeRateOfABatsmanEachSeason
  }