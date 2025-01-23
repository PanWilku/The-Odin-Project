function getComputerChoice() {
    const rock = 0;
    const paper = 1;
    const scissors = 2;
    let roll = Math.random();
    roll = roll * 3;
    console.log(roll);


    if (roll < 1) {
        return console.log("rock!");
    } else if (roll < 2) {
        return console.log("paper");
    } else {
        return console.log("scissors!");
    }
}

console.log(getComputerChoice());