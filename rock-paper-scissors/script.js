function getComputerChoice() {
    const rock = 0;
    const paper = 1;
    const scissors = 2;
    let roll = Math.random();
    roll = roll * 3;
    console.log(roll);


    if (roll < 1) {
        return "rock!";
    } else if (roll < 2) {
        return "paper";
    } else {
        return "scissors!";
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


function playRound(humanChoice, computerChoice) {

}


function playGame(){


let humanScore = 0;
let computerScore = 0;
const roundsLimit = 5;


const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

playRound(computerChoice, humanChoice);


}




playGame();

