document.addEventListener('DOMContentLoaded', startGame);

// Define your `board` object here!
var board = {cells:[]};

let size = 5

for (var x = 0; x < size; ++x){
 for(var y = 0; y < size; ++y){
   board.cells.push({
     row : x,
     col : y,
     isMine : Math.random() < 0.5,
     isMarked: false,
     hidden : true,
     surroundingMines : 0
   })
 }
};
function startGame() {

  for (var i = 0; i<board["cells"].length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }

  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}
  
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i = 0; i < board.cells.length; i++){
    var check = board.cells[i];
    if(!check.isMine && check.hidden){
      return false;
    } else if (check.isMine && !check.isMarked) {
      return false;
    }else if (!check.hasOwnProperty("isMarked"))
    return false;
  }
     // lib.displayMessage('Winner!!!');}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
     lib.displayMessage('You win!')
    }


  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)

  //lib.displayMessage('You win!');


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;

  for (var i = 0; i<surrounding.length; i++){
    if(surrounding[i].isMine === true){
      count += 1;
    } else {
      count = count;
    }
  }
  return count;
}


// function countSurroundingMines (cell) {

//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//   let count = 0;

//   surrounding.forEach((cell) => {
//     if(cell.isMine) {
//       count++
//     }
//   });
//   return count;
// }

