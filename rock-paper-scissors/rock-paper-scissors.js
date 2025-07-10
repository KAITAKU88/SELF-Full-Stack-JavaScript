//Khai báo và khởi tạo biến score của người chơi
let humanScore = 0;
let computerScore = 0;

//Hàm này trả về lựa chọn của máy tính (ngẫu nhiên)

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

//Hàm này trả về lựa chọn của người chơi, nhập vào bằng promt method
function getHumanChoice() {
    let humanChoise = "";
    let input = prompt(`Nhập vào lựa chọn của bạn 
        r nếu chọn rock
        p nếu là paper
        s nếu là scissors`);
    input = input.toLowerCase();
    switch (input) {
        case "r":
            humanChoise = "rock";
            break;
        case "p":
            humanChoise = "paper";
            break;
        case "s":
            humanChoise = "scissors";
            break;
        default :
            alert("Nhập sai, vui lòng nhập lại!");
            getHumanChoice();

    }
    return humanChoise;
}

//Tạo hàm để chơi 
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        // console.log(`humanChoice: ${humanChoice} || computerChoice: ${computerChoice}`);
        console.log("2 bạn HÒA nhau!");
    } else if ((humanChoice === 'paper' && computerChoice === "rock") ||
                (humanChoice === 'rock' && computerChoice === 'scissors') ||
                (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        // console.log(`humanChoice: ${humanChoice} || computerChoice: ${computerChoice}`);
        console.log(`humanScore: ${humanScore}`);
        console.log("Human win!");
    } else {
        computerScore++;
        // console.log(`humanChoice: ${humanChoice} || computerChoice: ${computerChoice}`);
        console.log(`computerScore: ${computerScore}`);
        console.log("Computer win!");
    }
}

playRound(getHumanChoice(), getComputerChoice());
