function getComputerChoice () {
    let rand = Math.floor(Math.random() * 3 ) + 1;
    switch (rand) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors"
            break
    }
}

function playRound(human, robot) {
    if (human == robot) {
        return 0
    } else if (human == "rock" && robot == "paper") {
        return 1
    } else if (human == "rock" && robot == "scissors") {
        return 9
    } else if (human == "paper" && robot == "scissors") {
        return 1
    } else if (human == "paper" && robot == "rock") {
        return 9
    } else if (human == "scissors" && robot == "paper") {
        return 9
    } else if (human == "scissors" && robot == "rock") {
        return 1   
    }
}

function game() {
    let humanScore = 0;
    let robotScore = 0;        
    while (humanScore < 5 && robotScore < 5) {
        let robotSelection = getComputerChoice();
        let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
        while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
            playerSelection = prompt('Please type: Rock, Paper or Scissors').toLowerCase();
        }
        let jogoAtual = playRound(playerSelection, robotSelection);
        if (jogoAtual === 0) {
            console.log(`It's a tie`);
        } else if (jogoAtual === 1) {
            robotScore++;
            console.log(`You Lose! ${robotSelection} beats ${playerSelection}`);
        } else {
            humanScore++;
            console.log(`You Win! ${playerSelection} beats ${robotSelection}`);
        }
    }
    console.log(`-=Score=- You: ${humanScore} Robot: ${robotScore}`);
}
game();