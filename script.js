const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay"); 
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor (Math.random() * 3)];
    let result = ""; 
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";

    }
    else{
        switch (playerChoice) {
            case "rock": 
                result=(computerChoice === "scissor") ? "PLAYER WIN!" : "YOU LOSE!";
                break;
        
            case "paper": 
                result=(computerChoice === "rock") ? "PLAYER WIN!" : "YOU LOSE!";
                break;
            case "scissor": 
                result=(computerChoice === "paper") ? "PLAYER WIN!" : "YOU LOSE!";
                break;    
        }    
            
    }
    playerDisplay.textContent = `PLAYER SELECTED: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER SELECTED: ${computerChoice}`;
    resultDisplay.textContent = result;
    switch (result) {
        case "PLAYER WIN!":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}