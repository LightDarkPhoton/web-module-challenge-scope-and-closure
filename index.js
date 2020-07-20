// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 uses no global variables. Counter2 does. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *  I'm tempted to say both use a closure, since they both reference variables outside their local scope.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * I think in general counter1 would be preferred since global variables tend to be frowned upon in development. I can't think of a scenario where you'd want counter2.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(/*Code Here*/){

return Math.floor(Math.random() * 3);
}


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callbackFunction, inning){

  let index = 0;
  let home = 0;
  let away = 0;

  let turn = "home";

  while (index < inning) {

    if (turn === "home") {
      home = home + callbackFunction();
      turn = "away";
    } else if (turn === "away") {
      away = away + callbackFunction();
      turn = "home";
    }
    index = index + 1;

  }

  return {"Home": home, "Away": away}
}

//finalScore(inning, 9);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(getInningScoreFunction, inningFunction, numberOfInnings) {

  let index = 0;
  let abbreviation = ""

  while (index < numberOfInnings) {
    if (index === 0) {
      abbreviation = "st";
    } else if (index === 1) {
      abbreviation = "nd";
      }
      else if (index === 2) {
      abbreviation = "rd";
      } else {
      abbreviation = "th";
      }

    var score = getInningScoreFunction(inningFunction, numberOfInnings);
    console.log(`${index + 1}${abbreviation} inning: ${score.Home}-${score.Away}`);

    index = index + 1;
  }

  return `Final Score: ${score.Home}-${score.Away}`
}

scoreboard(finalScore, inning, 9);


