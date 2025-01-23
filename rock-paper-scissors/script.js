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

// console.log(getComputerChoice());



function getHumanChoice() {

    userInput= prompt("Enter a symbol (rock, paper, scissors)");
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        return alert("Input a valid symbol"), getHumanChoice();
    }

}

// console.log(getHumanChoice());


function playRound(roundCount, scores, roundsLeft) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    if (computerChoice === humanChoice) {
        alert(`Draw! Computer: ${scores.computerScore}, You: ${scores.humanScore}. 
            ${roundsLeft} rounds left!`);
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            scores.computerScore += 1;
            alert(`You lost! The opponent played paper! Computer: ${scores.computerScore}, 
                You: ${scores.humanScore}. ${roundsLeft} rounds left!`);
        } else {
            scores.humanScore += 1;
            alert(`You won! The opponent played scissors! Computer: ${scores.computerScore}, 
                You: ${scores.humanScore}. ${roundsLeft} rounds left!`);
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            scores.humanScore += 1;
            alert(`You won! The opponent played rock! Computer: ${scores.computerScore}, 
                You: ${scores.humanScore}. ${roundsLeft} rounds left!`);
        } else {
            scores.computerScore += 1;
            alert(`You lost! The opponent played scissors! Computer: ${scores.computerScore}, 
                You: ${scores.humanScore}. ${roundsLeft} rounds left!`);
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            scores.computerScore += 1;
            alert(`You lost! The opponent played rock! Computer: ${scores.computerScore}, 
                You: ${scores.humanScore}. ${roundsLeft} rounds left!`);
        } else {
            scores.humanScore += 1;
            alert(`You won! The opponent played paper! Computer: ${scores.computerScore}, 
                You: ${scores.humanScore}. ${roundsLeft} rounds left!`);
        }
    }
}

function playGame() {
    let scores = { humanScore: 0, computerScore: 0 };
    const roundsLimit = 5;

    for (let roundCount = 1; roundCount <= roundsLimit; roundCount++) {
        const roundsLeft = roundsLimit - roundCount; // Calculate rounds left
        playRound(roundCount, scores, roundsLeft);
    }

    alert(`The game has ended! Final Score - Computer: ${scores.computerScore}, You: ${scores.humanScore}.`);

    // Ask the user if they want to restart the game
    if (confirm("Do you want to play again?")) {
        playGame();
    } else {
        alert("Thanks for playing! Goodbye.");
    }
}

playGame();
