function getComputerChoice() {
    let choices ="";
    const randomNumber = Math.round(Math.random() * 100);
    switch (randomNumber % 3) {
        case 0:
            choices = "rock";
            break;
        case 1:
            choices = "paper";
            break;
        default:
            choices = "scissors";    
    }
    return choices;
    
}

console.log(getComputerChoice());