/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (rounds) {

  var plays = ['rock', 'paper', 'scissors'];
  var rounds = rounds || 3;
  var combos = [];

  var generateCombos = function (roundsToGo, playedSoFar) {
    playedSoFar = playedSoFar || [];
    
    if (roundsToGo === 0) {
      combos.push(playedSoFar);
      return;
    }
    
    for (var i = 0; i < plays.length; i++) {
      var currentPlay = plays[i];
      generateCombos(roundsToGo - 1, playedSoFar.concat(currentPlay));
    }
    
  }

  generateCombos(rounds);
  return combos;
};

console.log(rockPaperScissors(3));
