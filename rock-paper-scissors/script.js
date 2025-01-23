function getComputerChoice() {
    let roll = Math.random() * 3;
    if (roll < 1) {
        return "rock";
    } else if (roll < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function disableButtons(btnRock, btnPaper, btnScissors) {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}

function enableButtons(btnRock, btnPaper, btnScissors) {
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
}

function playGame() {
    let scores = { player: 0, computer: 0 };
    const roundsLimit = 5;

    const rules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    const messageP = document.querySelector("#message-p");
    const scoreP = document.querySelector("#score-p");


    let btnRock = document.querySelector("#btn1");
    let btnPaper = document.querySelector("#btn2");
    let btnScissors = document.querySelector("#btn3");
    let resetButton = document.querySelector("#reset-b");

    function resetGame() {
        scores.player = 0;
        scores.computer = 0;
    
        messageP.textContent = "Game reset! Select a symbol!";
        scoreP.textContent = "Player: 0 | Computer: 0";
        enableButtons(btnRock, btnPaper, btnScissors);
    }



    function playRound(playerChoice) {
        const computerChoice = getComputerChoice();
        console.log(`Player: ${playerChoice}, Computer: ${computerChoice}`);

        if (playerChoice === computerChoice) {
            messageP.textContent = "It's a DRAW!";
        } else if (rules[playerChoice] === computerChoice) {
            scores.player++;
            messageP.textContent = `You WIN! ${playerChoice} beats ${computerChoice}`;
        } else {
            scores.computer++;
            messageP.textContent = `You LOSE! ${computerChoice} beats ${playerChoice}`;
        }

        scoreP.textContent = `Player: ${scores.player} | Computer: ${scores.computer}`;

        if (scores.player === roundsLimit || scores.computer === roundsLimit) {
            if (scores.player === roundsLimit) {
                messageP.textContent += " Congrats! You won the game!";
            } else {
                messageP.textContent += " Game over! The computer wins.";
            }
            disableButtons(btnRock, btnPaper, btnScissors);
        }
    }

    btnRock.addEventListener("click", () => playRound("rock"));
    btnPaper.addEventListener("click", () => playRound("paper"));
    btnScissors.addEventListener("click", () => playRound("scissors"));
    resetButton.addEventListener("click", resetGame);
}

playGame();
