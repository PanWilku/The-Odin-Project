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


        if(computerChoice === "scissors") {
            const cardWrapper = document.querySelector("#scissors .card-wrapper");
            console.log(cardWrapper);
            cardWrapper.classList.add("flipped");
        }else if(computerChoice === "paper") {
            const cardWrapper = document.querySelector("#paper .card-wrapper")
            cardWrapper.classList.add("flipped");
        } else {
            const cardWrapper = document.querySelector("#rock .card-wrapper")
            cardWrapper.classList.add("flipped");
        }



        messageP.classList.remove("win-message", "tie-message", "lose-message");

        if (playerChoice === computerChoice) {
            messageP.classList.add("tie-message");
            messageP.textContent = "It's a DRAW!";
            disableButtons(btnRock, btnPaper, btnScissors);
        } else if (rules[playerChoice] === computerChoice) {
            scores.player++;
            messageP.classList.add("win-message");
            messageP.textContent = `You WIN! ${playerChoice} beats ${computerChoice}`;
            disableButtons(btnRock, btnPaper, btnScissors);
        } else {
            scores.computer++;
            messageP.classList.add("lose-message");
            messageP.textContent = `You LOSE! ${computerChoice} beats ${playerChoice}`;
            disableButtons(btnRock, btnPaper, btnScissors);
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



        setTimeout(() => {
            const allCards = document.querySelectorAll(".card-wrapper.flipped");
            allCards.forEach(card => card.classList.remove("flipped"));
            enableButtons(btnRock, btnPaper, btnScissors);
            if (scores.player === roundsLimit || scores.computer === roundsLimit) {
                disableButtons(btnRock, btnPaper, btnScissors);
            }
        }, 3000);

    }

    btnRock.addEventListener("click", () => playRound("rock"));
    btnPaper.addEventListener("click", () => playRound("paper"));
    btnScissors.addEventListener("click", () => playRound("scissors"));
    resetButton.addEventListener("click", resetGame);
}

playGame();
