class Chessboard {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.board = [];
      this.createBoard();
    }
    
    // Method to create an 8x8 chessboard
    createBoard() {
      for (let row = 0; row < 8; row++) {
        this.board[row] = [];
        for (let col = 0; col < 8; col++) {
          // Create a new div for each square
          const square = document.createElement('div');
          square.classList.add('square');
          
          // Add the color class based on the sum of row and col
          if ((row + col) % 2 === 0) {
            square.classList.add('white');
          } else {
            square.classList.add('black');
          }
          
          // Set a unique id for each square in the format "row-col"
          square.id = `${row}-${col}`;
          
          // Append the square to the container
          this.container.appendChild(square);
          
          // Store the square in the board array (optional)
          this.board[row][col] = square;
        }
      }
    }
  }


  class Knight {
    constructor() {
        this.moves = [
            [2, 1],
            [1, 2],
            [-1, 2],
            [-2, 1],
            [-2, -1],
            [-1, -2],
            [1, -2],
            [2, -1]
          ];
    }

    shortestPath(currentPosition, wantedPosition) {
        const boardLimit = 7;
        const isValid = ([x, y]) => x >= 0 && x <= boardLimit && y >= 0 && y <= boardLimit;
    
        // Check if the starting or target positions are invalid.
        if (!isValid(currentPosition)) {
          console.log("Current position is outside the chessboard");
          return;
        }
        if (!isValid(wantedPosition)) {
          console.log("Wanted position is invalid");
          return;
        }


        let bestPath = null;
        const target = wantedPosition;

        const dfs = (current, path) => {
            if(current[0] == target[0] && current[1] == target[1]) {
                if(bestPath == null || path.length < bestPath.length) {
                    bestPath = [...path];
                }
                return;
            }

        // If we already have a path and the current path is not shorter, stop exploring.
        if (bestPath && path.length >= bestPath.length) return;

        // Try every possible knight move.
        for (const [dx, dy] of this.moves) {
            const nextPos = [current[0] + dx, current[1] + dy];
            // Check if the move stays on the board and isn't already in the path (to avoid cycles).
            //.some has to give false output meaning that there is no path like this, and ! inverts the result so it can push it to path
            if (isValid(nextPos) && !path.some(pos => pos[0] === nextPos[0] && pos[1] === nextPos[1])) {
              path.push(nextPos);  // Add this move to the path.
              dfs(nextPos, path);  // Continue searching from the new position.
              path.pop();          // Remove the move to backtrack and try another move.
            }
          }
        }
    // Start the search from the currentPosition, with the initial path containing only the start.
    dfs(currentPosition, [currentPosition]);
    
    return bestPath; // Return the shortest path found (or null if none).

    }
  }





function colorSquares(path) {
    let counter = 0
    path.forEach(position => {

        const square = document.getElementById(`${position[0]}-${position[1]}`)
        square.textContent = `${counter}`;
        square.classList.remove("black")
        square.classList.remove("white")
        square.classList.add("red")
        square.classList.add("align")
        counter += 1;
    })
}


function getNum(input) {
    // Check if the input is provided and is a string
    if (typeof input !== 'string') {
      throw new TypeError('Input must be a string in the format "num-num".');
    }
    
    // Split the input using "-" as the delimiter
    const parts = input.split('-');
    if (parts.length !== 2) {
      throw new Error('Invalid format. Please enter in the format "num-num".');
    }
    
    // Trim any whitespace and convert both parts to numbers
    const num1 = parseInt(parts[0].trim(), 10);
    const num2 = parseInt(parts[1].trim(), 10);
    
    // Validate that both conversions resulted in valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('One or both values are not valid numbers.');
    }
    
    // Return the two numbers in an array
    return [num1, num2];
  }

  
  // Wait for the DOM to load before creating the chessboard
  document.addEventListener("DOMContentLoaded", () => {
    const myChessboard = new Chessboard('chessboard');
    const knight = new Knight();
    const starting = getNum(prompt("Enter starting position e.g. 3-5"))
    const ending = getNum(prompt("Enter ending position e.g. 1-2"))

    const path = knight.shortestPath(starting, ending);


    if (path) {
        console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
        path.forEach(position => console.log(position));
        colorSquares(path);
      } else {
        console.log("No valid path found.");
      }
  });



  