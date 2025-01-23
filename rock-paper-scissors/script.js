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

console.log(getComputerChoice());



function getHumanChoice() {

    userInput = prompt("Enter a symbol (rock, paper, scissors)");
    return userInput;

}

console.log(getHumanChoice());