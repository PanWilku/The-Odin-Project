
 //module for game board as game board and game controller should be separated
const gameBoard = (function() {

    let board = ["", "", "", "", "", "", "", "", ""];


    const updateBoard = (index, mark) => {
        if (board[index] === "") {
            board[index] = mark;
            if(board[index] === "X") {
                cells[index].classList.add("x-color"); 
                } else {
                    cells[index].classList.add("o-color");
                };
            } else {
                console.log("cell is taken");
            };
        };


    const printBoard = () => {
        console.log(`[${board[0]}] | [${board[1]}], [${board[2]}]`);
        console.log(`[${board[3]}] | [${board[4]}], [${board[5]}]`);
        console.log(`[${board[6]}] | [${board[7]}], [${board[8]}]`);
    }

    const getBoard = () => board;

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    }

    return {updateBoard, printBoard, getBoard, resetBoard}

})();

    //factory function for creating a player
const createPlayer = (name, mark) => {

    return {name, mark};
};


const rulesOfTheGame = (function() {

    const winningPatterns = {
          rows: [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
          ],
          columns: [
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
          ],
          diagonals: [
            [0, 4, 8], // Top-left to bottom-right diagonal
            [2, 4, 6], // Top-right to bottom-left diagonal
          ],
    };

    const getAllPatterns = () => {
        return [
            ...winningPatterns.rows,
            ...winningPatterns.columns,
            ...winningPatterns.diagonals,
        ];
    };

    return {getAllPatterns};
})();


const gameController = (function() {

    //create player
    const playerX = createPlayer("Player 1", "X");
    const playerO = createPlayer("Player 2", "O");


    //who's turn is it
    let currentPlayer = playerX;

    //turn switch
    const switchTurn = () => {
        currentPlayer = (currentPlayer === playerX) ? playerO : playerX;
    };

    //check winner
    const checkWinner = () => {

        const board = gameBoard.getBoard();
        const patterns = rulesOfTheGame.getAllPatterns();

        for(const pattern of patterns) {
            const [a, b, c] = pattern;
            if(board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
                console.log(`${board[a]} wins!`);
                return {winner: board[a],
                        winningPattern: pattern,
                }; // game won
            }
        }
        
        if(!board.includes("")) {
            console.log("It's draw!");
            return "draw";
        }

        return false;

        }

    //game reset
    const resetGame = () => {
        gameBoard.resetBoard();
        currentPlayer = playerX;
        console.log("Game reset!");
    }

    const gameOver = (cells) => {

          // Disable cell clicks
        cells.forEach((cell) => {
        cell.removeEventListener("click", handleClick);
        });
        console.log("Cells disabled after winner found!");
    };

    //player move
    const makeMove = (index) => {
        gameBoard.updateBoard(index, currentPlayer.mark);
        gameBoard.printBoard();
        const result = checkWinner();
        if(result) {
            return result; 
        };
        switchTurn();
    }
    
    return {makeMove, checkWinner, resetGame, gameOver}

})();



const cells = document.querySelectorAll(".cell");
const resetButton = document.querySelector("#reset-btn");
const infoDisplay = document.querySelector(".info-display-winner");
let playerXPoints = 0;
let playerOPoints = 0;
const playerXPointsElement = document.createElement("h1");
const playerOPointsElement = document.createElement("h1");
const playerXPointsDiv = document.querySelector(".px-points");
const playerOPointsDiv = document.querySelector(".po-points");


cells.forEach((cell) => {
    cell.addEventListener("click", handleClick);
});


function handleClick(e) {
        const index = e.target.dataset.index;
        const result = gameController.makeMove(index);
        if (result) {
            const { winner, winningPattern } = result;
        
            if (winner === "X" || winner === "O") {
              winningPattern.forEach((cellIndex) => {
                cells[cellIndex].classList.add("animate-flicker");
              });

              const winnerMsg = document.createElement("h1");
              winnerMsg.classList.add("winner-msg");
              winnerMsg.textContent = `${winner}`;
              infoDisplay.appendChild(winnerMsg);

              if(winner === "X") {
                playerXPoints += 1;
              } else if(winner === "O") {
                playerOPoints += 1;
              };



              playerXPointsElement.textContent = playerXPoints;
              playerOPointsElement.textContent = playerOPoints;

              playerXPointsDiv.appendChild(playerXPointsElement);
              playerOPointsDiv.appendChild(playerOPointsElement);
        
              gameController.gameOver(cells);
            }
            else if (winner === "draw") {
              const winnerMsg = document.createElement("h1");
              winnerMsg.classList.add("winner-msg");
              winnerMsg.textContent = "It's a draw!";
              infoDisplay.appendChild(winnerMsg);
              gameController.gameOver(cells);
            }
          }
        
          const board = gameBoard.getBoard();
          e.target.textContent = board[index];
};

resetButton.addEventListener("click", () => {
    gameController.resetGame();
    cells.forEach((cell) => {
      cell.textContent = "";
      cell.addEventListener("click", handleClick);
      cell.classList.remove("x-color", "o-color", "animate-flicker");
    });
    infoDisplay.innerHTML = "";
  });