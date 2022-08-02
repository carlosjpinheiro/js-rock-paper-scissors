let humanScore = 0;
let robotScore = 0; 
const humanScoreDiv = document.querySelector('#human');
const robotScoreDiv = document.querySelector('#robot');
const buttons = document.querySelectorAll('.buttons');
const resetButton = document.querySelector('#reset');
const finalMsg = document.querySelector('#final');

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
    } else if ((human == "rock" && robot == "paper") || (human == "paper" && robot == "scissors") || (human == "scissors" && robot == "rock")) {
        return 1
    } else if ((human == "rock" && robot == "scissors") || (human == "paper" && robot == "rock") || (human == "scissors" && robot == "paper")) {
        return 9 
    }
}

function reset() {
    humanScore = 0;
    robotScore = 0;
    robotScoreDiv.textContent = 'Robot: 0';
    humanScoreDiv.textContent = 'Human: 0';
    finalMsg.textContent = '';
}

function playGame (button) {
    if (humanScore == 5 || robotScore == 5) reset();
    finalMsg.textContent = '';
    let humanChoice = button.textContent.toLowerCase().replace('!','');
    let robotChoice = getComputerChoice();
    let currentGame = playRound(humanChoice, robotChoice);
    if (currentGame === 0) {
        finalMsg.textContent = 'Tie';
    } else if (currentGame === 1) {
        robotScore++;
        robotScoreDiv.textContent = 'Robot: 0' + String(robotScore);
        finalMsg.textContent = `${robotChoice.toUpperCase()} BEATS ${humanChoice.toUpperCase()}`;
    } else {
        humanScore++;
        humanScoreDiv.textContent = 'Human: 0' + String(humanScore);
        finalMsg.textContent = `${humanChoice.toUpperCase()} BEATS ${robotChoice.toUpperCase()}`;
    }
    if (humanScore == 5 || robotScore == 5) {
        gameEnd();
    }
}

function gameEnd () {
    if (humanScore >= 5) {
        finalMsg.textContent = `Human Victory!!! `;
    } else {
        finalMsg.textContent = 'Robot Victory =(';
    }
}

resetButton.addEventListener('click', reset)
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playGame(button)
    })
})
