
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


//Tạo hàm để chơi toàn bộ game, chơi 5 vòng mới phân định thắng thua.
function playGame() {
    //Khai báo và khởi tạo biến score của người chơi
    let humanScore = 0;
    let computerScore = 0;
    //Nếu dùng vòng lặp  thì sẽ đơn giản hơn
    //Nhưng ở đây ta sẽ cố gắng không sử dụng vòng lặp, vì ta chưa học 
    let countRound = 0; //biến đếm
    let resultRount;

    //Tạo hàm để chơi 1 vòng
    function playRound() {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        if (humanChoice === computerChoice) {
            resultRount = "Hòa";
        } else if ((humanChoice === 'paper' && computerChoice === "rock") ||
                    (humanChoice === 'rock' && computerChoice === 'scissors') ||
                    (humanChoice === 'scissors' && computerChoice === 'paper')) {
            ++humanScore;
            resultRount = "Human win";
        } else {
            ++computerScore;
            resultRount = "Computer win";
        }

        ++countRound; //sau mỗi lượt chơi thì tăng biến đếm lên 1 
        console.log(`Lượt chơi thứ : ${countRound}, humanScore: ${humanScore}, computerScore: ${computerScore}, ${resultRount}`);

        if( countRound < 5) { //Nếu chưa chơi đủ 5 vòng thì chơi tiếp 
            playRound();
        }

    }

    playRound();
    return console.log(( humanScore === computerScore) ? "Hòa" : (( humanScore > computerScore) ? "Human win!" : "Computer win!")); 
}

playGame();