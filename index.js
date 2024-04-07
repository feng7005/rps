function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    
    if (computer == 0)  computer = "rock";
    else if (computer == 1)  computer = "paper";
    else if (computer == 2)  computer = "scissors";

    return computer;
}
 
function getPlayerChoice() {
    let player = prompt("Tell me your choice! Choose between rock, paper, and scissors:");

    while (true) {
        player = player.toLowerCase();
        if (player != "rock" && player != "paper" && player != "scissors") {
            player = prompt("Invalid choice! Please pick again:");
        } else {
            break;
        }
    }
    
    return player;
}

function playRound() {
    player = getPlayerChoice();
    computer = getComputerChoice();

    if (player == computer) {
        console.log("It is a tie!");
        return 0;
    }
    else if (player == "rock" && computer == "scissors") {
        console.log("You win! Rock beats Scissors!");
        return 1;
    }
    else if (player == "rock" && computer == "paper") {
        console.log("You lose! Paper beats Rock!");
        return 2;
    }
    else if (player == "paper" && computer == "rock") {
        console.log("You win! Paper beats Rock!");
        return 1;
    }
    else if (player == "paper" && computer == "scissors") {
        console.log("You lose! Scissors beats Paper!");
        return 2;
    }
    else if (player == "scissors" && computer == "paper") {
        console.log("You win! Scissors beats Paper!");
        return 1;
    }
    else if (player == "scissors" && computer == "rock") {
        console.log("You lose! Rock beats Scissors!");
        return 2;
    }
}

function playGame() {
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound();

        if (result == 1) playerScore++;
        else if (result == 2) computerScore++;
    }

    console.log("Player Score:" + playerScore);
    console.log("Computer Score:" + computerScore);

    if (playerScore > computerScore) console.log("You WIN! Amazing job!")
    else if (computerScore > playerScore) console.log("You LOSE! Try again!")
    else console.log("A tie! Both did well!")
}