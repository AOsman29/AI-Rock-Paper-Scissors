let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a draw!';
    }

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                playerScore++;
                return 'You win! Rock beats Scissors!';
            } else if (computerSelection === 'paper') {
                computerScore++;
                return 'You lose! Paper beats Rock!';
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                playerScore++;
                return 'You win! Paper beats Rock!';
            } else if (computerSelection === 'scissors') {
                computerScore++;
                return 'You lose! Scissors beats Paper!';
            }
            break;
        case 'scissors':
            if (computerSelection === 'paper') {
                playerScore++;
                return 'You win! Scissors beats Paper!';
            } else if (computerSelection === 'rock') {
                computerScore++;
                return 'You lose! Rock beats Scissors!';
            }
            break;
        default:
            return 'Invalid choice';
    }
}

function game(playerChoice) {
    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);
    document.getElementById('result').textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    keepTrackOfScore();  // Call this function to update the score on the screen
}

function keepTrackOfScore() {
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}
