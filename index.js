function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    
    if (computer == 0)  computer = "rock";
    else if (computer == 1)  computer = "paper";
    else if (computer == 2)  computer = "scissors";

    return computer;
}
 
function getPlayerChoice() {
    let player = prompt("Tell me your choice! Choose between rock, paper, and scissors!");
    player = player.toLowerCase();
    
    return player;
}