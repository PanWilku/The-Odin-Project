function getComputerChoice() {
    const rock = 0;
    const paper = 1;
    const scissors = 2;
    let roll = Math.random();
    roll = roll * 3;
    console.log(roll);

    if (roll < 1) {
        return "rock";
    } else if (roll < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    userInput = prompt("Enter a symbol (rock, paper, scissors)");
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        return alert("Input a valid symbol"), getHumanChoice();
    }
}

function playRound(scores, roundsLeft) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    const rules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    if (computerChoice === humanChoice) {
        alert(`Draw! Computer: ${scores.computerScore}, You: ${scores.humanScore}. 
            ${roundsLeft} rounds left!`);
    } else if (rules[humanChoice] === computerChoice) {
        scores.humanScore += 1;
        alert(`You won! The opponent played ${computerChoice}! Computer: ${scores.computerScore}, 
            You: ${scores.humanScore}. ${roundsLeft} rounds left!`);
    } else {
        scores.computerScore += 1;
        alert(`You lost! The opponent played ${computerChoice}! Computer: ${scores.computerScore}, 
            You: ${scores.humanScore}. ${roundsLeft} rounds left!`);
    }
}

function playGame() {
    let scores = { humanScore: 0, computerScore: 0 };
    const roundsLimit = 5;

    for (let roundCount = 1; roundCount <= roundsLimit; roundCount++) {
        const roundsLeft = roundsLimit - roundCount;
        playRound(scores, roundsLeft);
    }

    alert(`The game has ended! Final Score - Computer: ${scores.computerScore}, You: ${scores.humanScore}.`);


    if (confirm("Do you want to play again?")) {
        playGame();
    } else {
        alert("Thanks for playing! Goodbye.");
    }
}

playGame();
