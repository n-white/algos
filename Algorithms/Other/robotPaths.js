/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

var robotPaths = function(n, board, i, j) {
  
  if (!board) {
    board = makeBoard(n);
    i = 0;
    j = 0;
  }

  // First base case is if you move off the board or you are on an already visited spot
  if (!(i < n && i >= 0 && j < n && j >= 0) || board.hasBeenVisited(i, j)) {
    return 0
  }

  // Second base case is if you reach the end
  if (i === n - 1 && j === n - 1) {
    return 1;
  }

  // Toggle the piece on
  board.togglePiece(i, j);
  // Then run the recursive case to the four nearby spots
  var result = robotPaths(n, board, i+1, j) +
               robotPaths(n, board, i-1, j) +
               robotPaths(n, board, i, j+1) +
               robotPaths(n, board, i, j+1)

  // Then untoggle the piece
  board.togglePiece(i, j);

  return result;
}

console.log(robotPaths(5));

// THINGS I LEARNED:
// When dealing with a complex problem like this
// just let the computer do the thinking for you
// i.e., let the computer test if you are still on the board
// or if that piece has been visited already. I started out the problem
// by trying to limit which squares the recursive call was being sent to
// rather than just testing it as a base case
