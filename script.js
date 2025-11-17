console.log("Hello world");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let rand = Math.random();
    let choice = "Scissors";
    if(rand >=0 && rand <= 1.0/3.0){
        choice = "Rock";
    }else if(rand > 1.0/3.0 && rand <= 2.0/3.0){
        choice = "Paper";
    }

    return choice;
}

function getHumanChoice(choice){
    if(choice==0){
        return "Rock";
    }else if(choice == 1){
        return "Paper";
    }else{
        return "Scissors";
    }
}

// Change Move emoji according to move
const playerMoveEmoji = document.querySelector("#playerMove");
const computerMoveEmoji = document.querySelector("#computerMove");

function changePlayerMoveEmoji(playerMove){
    if(playerMove == "Rock"){
        playerMoveEmoji.textContent = "👊";
    }else if(playerMove == "Paper"){
        playerMoveEmoji.textContent = "🖐️";
    }else{
        playerMoveEmoji.textContent = "✌️";
    }
}

function changeComputerMoveEmoji(computerMove){
    if(computerMove == "Rock"){
        computerMoveEmoji.textContent = "👊";
    }else if(computerMove == "Paper"){
        computerMoveEmoji.textContent = "🖐️";
    }else{
        computerMoveEmoji.textContent = "✌️";
    }
}

function playRound(player, computer){
    console.log(player + " vs " + computer + ": ");
    // Change UI emojis
    changePlayerMoveEmoji(player);
    changeComputerMoveEmoji(computer);


    if(player == "Rock"){
        if(computer == "Scissors"){
            playerScore++;
            //console.log("Player Wins!");
            return 1;
        }else if(computer == "Paper"){
            computerScore++;
            //console.log("Computer Wins!");
            return -1;
        }
    }else if(player == "Paper"){
        if(computer == "Rock"){
            playerScore++;
            //console.log("Player Wins!");
            return 1;
        }else if(computer == "Scissors"){
            computerScore++;
            //console.log("Computer Wins!");
            return -1;
        }
    }else if(player == "Scissors"){
        if(computer == "Paper"){
            playerScore++;
            //console.log("Player Wins!");
            return 1;
        }else if(computer == "Rock"){
            computerScore++;
            //console.log("Computer Wins!");
            return -1;
        }
        
    }
        
    //Draw
    console.log("Draw!!!");
    return 0;
    
}

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

const scoreBoard = document.querySelector("#scoreBoard");

// Create a button to restart the game
const restartBtn = document.createElement("button");
restartBtn.textContent = "Play Again"
// Get a reference to board in which we will attach restartBtn
const board = document.querySelector("#board");

let game = 0;

rockBtn.onclick = () => {
    playGame(getHumanChoice(0));
}
paperBtn.onclick = () => {
    playGame(getHumanChoice(1));
}
scissorsBtn.onclick = () => {
    playGame(getHumanChoice(2));
}

// Restart the game with restart button
restartBtn.onclick = () => {
    scoreBoard.textContent = "";
    playerMoveEmoji.textContent = "❓";
    computerMoveEmoji.textContent = "❓";
    playerScore = 0;
    computerScore = 0;

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    board.removeChild(restartBtn);
}

function playGame(playerChoice){
    game++;
    // Play the game and store the result
    let result = playRound(playerChoice, getComputerChoice()); 
    if(result == 1){
        scoreBoard.textContent += "✅";
    }else if(result == -1){
        scoreBoard.textContent += "❌";
    }else{
        scoreBoard.textContent += "🟰";
    }
    //console.log("Player Score = " + playerScore);
    //console.log("Computer Score = " + computerScore);

    if(game == 5){
        game = 0;
        scoreBoard.textContent = "";

        if(playerScore > computerScore){
            scoreBoard.textContent = "YOU WIN!!!";
        }else if(computerScore > playerScore){
            scoreBoard.textContent = "YOU LOST :(";
        }else{
            scoreBoard.textContent = "IT'S A DRAW!!!";
        }

        // Disable the buttons so that user can not restart it immediately
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        // Show the restart btn
        board.appendChild(restartBtn);
    }

    
}


