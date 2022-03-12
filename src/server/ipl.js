//Number of matches played per year for all the years in IPL.

function matchesPerYear(matches) {
  return matches.reduce((matchPerYear, match) => {
    const season = match.season;
    if (matchPerYear.hasOwnProperty(season)) {
      matchPerYear[season] += 1;
    } else {
      matchPerYear[season] = 1;
    }
    return matchPerYear;
  }, {});
}

// Array of seasons/years

function arrayOfYears(matches) {
  return Array.from(new Set(matches.map((match) => match.season))).sort();
}

// Array of winners

function arrayOfWinners(matches) {
  return Array.from(new Set(matches.map((match) => match.winner)));
}

//Matches played in a year

function matchesPlayedInAYear(matches, year) {
  return matches.filter((match) => {
    match.season == year;
    return match;
  });
}

// Number of matches won per team per year in IPL.

function matchesWonPerTeamPerYear(matches) {
  return matches.reduce((matchWonPerTeam, match) => {
    const season = match.season;
    const winner = match.winner;
    if (matchWonPerTeam.hasOwnProperty(season)) {
      if (matchWonPerTeam[season].hasOwnProperty(winner)) {
        matchWonPerTeam[season][winner] += 1;
      } else {
        matchWonPerTeam[season][winner] = 1;
      }
    } else {
      matchWonPerTeam[season] = {};
      matchWonPerTeam[season][winner] = 1;
    }
    return matchWonPerTeam;
  }, {});
}

//Extra runs conceded per team in the year 2016

function extraRunsConcededPerTeamInAYear(matches, deliveries, year) {
  let matchInAYear = matchesPlayedInAYear(matches, year);
  let idOfTheMatchesInAYear = Array.from(
    new Set(matchInAYear.map((match) => match.id))
    );
    let deliveriesInAYear = deliveries.filter((delivery) =>
    idOfTheMatchesInAYear.includes(delivery["match_id"])
    );
    return deliveriesInAYear.reduce((extraRunsPerTeam, delivery) => {
      let team = delivery.batting_team;
      let extraRuns = Number(delivery["extra_runs"]);
      if (extraRunsPerTeam.hasOwnProperty(team)) {
        extraRunsPerTeam[team] += extraRuns;
      } else {
        extraRunsPerTeam[team] = extraRuns;
      }
      return extraRunsPerTeam;
    }, {});
  }
  
  //Top 10 economical bowlers in the year 2015
  
  function economicalBowlersInAYear(matches, deliveries, year, count) {
    let matchInAYear = matchesPlayedInAYear(matches, year);
    let idOfTheMatchesInAYear = Array.from(
      new Set(matchInAYear.map((match) => match.id))
      );
      let deliveriesInAYear = deliveries.filter((delivery) =>
      idOfTheMatchesInAYear.includes(delivery["match_id"])
      );
      let runsGivenPerBowler = deliveriesInAYear.reduce(
        (runsGivenByBowler, delivery) => {
          let totalRun = Number(delivery["total_runs"]);
          let bowler = delivery["bowler"];
          if (runsGivenByBowler.hasOwnProperty(bowler)) {
            runsGivenByBowler[bowler] += totalRun;
          } else {
            runsGivenByBowler[bowler] = totalRun;
          }
          return runsGivenByBowler;
        },
        {}
        );
        const reverseSortedRunsGivenPerBowler = Object.entries(runsGivenPerBowler)
        .sort(([, runA], [, runB]) => runB - runA)
        .reduce((result, [key, value]) => ({ ...result, [key]: value }), {});
        let reverseSortedArrayOfBowlers = Object.keys(
          reverseSortedRunsGivenPerBowler
          );
          return reverseSortedArrayOfBowlers.slice(0, count);
        }
        
        //Find the number of times each team won the toss and also won the match
        
        function countOfTeamWinningTossAndMatch(matches) {
          return matches.reduce((countOfWinner, match) => {
            let tossWinner = match["toss_winner"];
            let winner = match["winner"];
            if (tossWinner == winner) {
              if (countOfWinner.hasOwnProperty(winner)) {
                countOfWinner[winner] += 1;
              } else {
                countOfWinner[winner] = 1;
              }
            }
            return countOfWinner;
          }, {});
        }
        
        //Find a player who has won the highest number of Player of the Match awards for each season
        
        function playerOfTheMatchPerYear(matches) {
          return matches.reduce((countOfPlayerOfMatch, match) => {
            let playerOfTheMatch = match["player_of_match"];
            let season = match["season"];
            if (countOfPlayerOfMatch.hasOwnProperty(season)) {
              if (countOfPlayerOfMatch[season].hasOwnProperty(playerOfTheMatch)) {
                countOfPlayerOfMatch[season][playerOfTheMatch] += 1;
              } else {
                countOfPlayerOfMatch[season][playerOfTheMatch] = 1;
              }
            } else {
              countOfPlayerOfMatch[season] = {};
              countOfPlayerOfMatch[season][playerOfTheMatch] = 1;
            }
            return countOfPlayerOfMatch;
          }, {});
        }
        
        //Find the strike rate of a batsman for each season
        
        function strikeRateOfABatsmanEachSeason(matches, deliveries, batsman) {
          let arrayOfYears = Array.from(
            new Set(matches.map((match) => match.season))
            ).sort();
            for (let year = 0; year < arrayOfYears.length; year++) {
              let matchInAYear = matches.filter(match => match.season == arrayOfYears[year]);
              let idOfTheMatchesInAYearByBatsman = Array.from(
                new Set(matchInAYear.map((match) => match.id)));
                let deliveriesInAYear = deliveries.filter((delivery) =>
                idOfTheMatchesInAYearByBatsman.includes(delivery["match_id"])
                );
                if (!Array.from(new Set(deliveriesInAYear.map(delivery => delivery["batsman"]))).includes(batsman)) {
                  year++;
                } else {
                // console.log(Array.from(new Set(deliveriesInAYear.map(delivery => delivery["batsman"]))).includes(batsman));
                let balls = deliveriesInAYear.length;
                let totalRunsPerYear = {};
                let totalRuns = 0;
                console.log(deliveriesInAYear.filter(delivery => delivery["batsman"] == batsman));
                totalRunsPerYear[year] = deliveriesInAYear
                .filter(delivery => delivery["batsman"] == batsman)
                .reduce((totalRuns, delivery) => {
                  // console.log(totalRun);
                  let totalRun = Number(delivery["total_runs"]);
                  // console.log("totalRun: ", totalRun, "totalRuns: ", totalRuns);
                  totalRuns += totalRun;
                  // console.log(totalRuns);
                });
                // })
              }
                
                
                // .reduce((totalRuns, delivery) => {
                //   let totalRun = Number(delivery["total_runs"]);
                //   if (delivery["batsman"] == batsman) {    
                //     if (totalRuns.hasOwnProperty(arrayOfYears[year])) {
                //       totalRuns[arrayOfYears[year]] += totalRun;          
                //     } else {
                //       totalRuns[arrayOfYears[year]] = totalRun;
                //     } 
                //   } //return totalRuns;
                //   console.log(totalRuns);
                // }, {});
                // console.log(totalRunsPerYear);
                // for (let key in totalRunsPerYear) {
                //   totalRunsPerYear[key] = totalRunsPerYear[key] / balls * 100;
                  // console.log(key);
                  // console.log(totalRunsPerYear[key]);
                  // console.log(key, totalRunsPerYear[key]);
                // } //console.log("final: ", totalRunsPerYear);
                // return totalRunsPerYear;
                
              }
            }
            
            module.exports = {
              matchesPerYear,
              arrayOfYears,
              arrayOfWinners,
              matchesPlayedInAYear,
              matchesWonPerTeamPerYear,
              extraRunsConcededPerTeamInAYear,
              economicalBowlersInAYear,
              countOfTeamWinningTossAndMatch,
              playerOfTheMatchPerYear,
              strikeRateOfABatsmanEachSeason,
            };
            