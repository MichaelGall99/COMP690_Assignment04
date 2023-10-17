// DISPLAY THE NAME OF THE ROCK, PAPER, SCISSORS GAME TO THE USER
function displayGameTitle() {
    alert(' Welcome to The Rock, Paper, Scissors Game')
}

// PROMPT THE USER FOR THEIR CHOICE (ROCK, PAPER, or SCISSORS)
function promptUserChoice() {
    do {
        userChoiceStr = prompt('Please enter your choice [rock, paper, scissors]: ').toLowerCase()
    
        if (userChoiceStr != 'rock' && userChoiceStr != 'paper' && userChoiceStr != 'scissors') {
            alert('You must enter \'rock\', \'paper\', or \'scissors\' to play the game!')
        }
    } while (userChoiceStr != 'rock' && userChoiceStr != 'paper' && userChoiceStr != 'scissors')
    return userChoiceStr    
}

// GET THE COMPUTER'S ROCK, PAPER, SCISSORS CHOICE
function getComputerChoice() {
    let computerChoiceNum
    let computerChoiceStr

    computerChoiceNum = Math.round(Math.floor(Math.random() * 3))             // returns a random number 0-2

    switch (computerChoiceNum) {
        case 0:
            computerChoiceStr = 'rock';
            break;
        case 1:
            computerChoiceStr = 'paper';
            break;
        case 2:
            computerChoiceStr = 'scissors';
            break;
    }
    alert (`The computer chose ${computerChoiceStr}`)

    return computerChoiceStr
}

// COMPARE THE USER'S CHOICE TO THE COMPUTER'S CHOICE TO SEE WHO WINS
function seeWhoWins(userChoiceStr, computerChoiceStr) {
    switch (userChoiceStr) {
        case 'rock':
            if (computerChoiceStr == 'scissors') {
                alert ('Rock destroys scissors... YOU WIN!!!')
            } else if (computerChoiceStr == 'paper') {
                alert ('Paper covers rock... SORRY, YOU LOSE.')
            } else if (computerChoiceStr == 'rock') {
                alert ('You and the computer both chose rock... YOU TIED.')
            }
        break;
        case 'paper':
            if (computerChoiceStr == 'rock') {
                alert ('Paper covers rock... YOU WIN!!!')
            } else if (computerChoiceStr == 'scissors') {
                alert ('Scissors cut paper... SORRY, YOU LOSE.')
            } else if (computerChoiceStr == 'paper') {
                alert ('You and the computer both chose paper... YOU TIED.')
            }
        break;
        case 'scissors':
            if (computerChoiceStr == 'paper') {
                alert ('Scissors cut paper... YOU WIN!!!')
            } else if (computerChoiceStr == 'rock') {
                alert ('Rock destroys scissors... SORRY, YOU LOSE.')
            } else if (computerChoiceStr == 'scissors') {
                alert ('You and the computer both chose scissors... YOU TIED.')
            }
        break;
    }
}

// MAIN FUNCTION TO PLAY THE ROCK, PAPER, SCISSORS GAME
function playRockPaperScissors () {
    let userChoiceStr
    let computerChoiceStr
    let playAgain

    displayGameTitle()

    do {
        userChoiceStr = promptUserChoice()
        computerChoiceStr = getComputerChoice()
        seeWhoWins(userChoiceStr, computerChoiceStr)

        do {
            playAgain = prompt('Would you like to play again [y/n]: ')
        } while (playAgain != 'y' && playAgain != 'n')
        
    } while (playAgain != 'n')

    alert ('Thank you for playing The Rock, Paper, Scissors Game')
}


// LAUNCH THE ROCK, PAPER, SCISSORS GAME
playRockPaperScissors()

