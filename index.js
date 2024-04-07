function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    
    if (computer == 0)  computer = "rock";
    else if (computer == 1)  computer = "paper";
    else if (computer == 2)  computer = "scissors";

    return computer;
}
 
function getPlayerChoice(e) {  
    return e.target.id;
}

function playRound(e) {
    player = getPlayerChoice(e);
    computer = getComputerChoice();
    let result = document.querySelector(".result");

    if (player == computer) {
        result.textContent = "It is a tie!";
    }
    else if (player == "rock" && computer == "scissors") {
        result.textContent = "You win! Rock beats Scissors!";
        playerScore += 1;
    }
    else if (player == "rock" && computer == "paper") {
        result.textContent = "You lose! Paper beats Rock!";
        computerScore += 1;
    }
    else if (player == "paper" && computer == "rock") {
        result.textContent = "You win! Paper beats Rock!";
        playerScore += 1;
    }
    else if (player == "paper" && computer == "scissors") {
        result.textContent = "You lose! Scissors beats Paper!";
        computerScore += 1;
    }
    else if (player == "scissors" && computer == "paper") {
        result.textContent = "You win! Scissors beats Paper!";
        playerScore += 1;
    }
    else if (player == "scissors" && computer == "rock") {
        result.textContent = "You lose! Rock beats Scissors!";
        computerScore += 1;
    }

    let playerscr = document.querySelector("#player-score")
    let computerscr = document.querySelector("#computer-score")

    playerscr.textContent = "Player: " + playerScore
    computerscr.textContent = "Computer: " + computerScore

    if (playerScore == 5) {
        result.textContent = "PLAYER WIN!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        result.textContent = "COMPUTER WIN!";
        playerScore = 0;
        computerScore = 0;
    }
    
    return 0;
}

let playerScore = 0;
let computerScore = 0;

let rock_btn = document.querySelector("#rock");
let paper_btn = document.querySelector("#paper");
let scissors_btn = document.querySelector("#scissors");

rock_btn.addEventListener("click", playRound)
paper_btn.addEventListener("click", playRound)
scissors_btn.addEventListener("click", playRound)
