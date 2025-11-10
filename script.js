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

function getHumanChoice(){
    let choice = Number(prompt("Enter a number between 0-2", 0));
    if(choice==0){
        return "Rock";
    }else if(choice == 1){
        return "Paper";
    }else{
        return "Scissors";
    }
}

function playRound(player, computer){
    console.log(player + " vs " + computer + ": ");
    if(player == "Rock"){
        if(computer == "Scissors"){
            playerScore++;
            console.log("Player Wins!");
            return;
        }else if(computer == "Paper"){
            computerScore++;
            console.log("Computer Wins!");
            return;
        }
    }else if(player == "Paper"){
        if(computer == "Rock"){
            playerScore++;
            console.log("Player Wins!");
            return;
        }else if(computer == "Scissors"){
            computerScore++;
            console.log("Computer Wins!");
            return;
        }
    }else if(player == "Scissors"){
        if(computer == "Paper"){
            playerScore++;
            console.log("Player Wins!");
            return;
        }else if(computer == "Rock"){
            computerScore++;
            console.log("Computer Wins!");
            return;
        }
        
    }
        
    //Draw
    console.log("Draw!!!");
    
}

function playGame(n){
    for(let i=0;i<n;i++){
        console.log("--------------");
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Player Score: " + playerScore.toString());
        console.log("Computer Score: " + computerScore.toString());
        console.log("--------------");
    }
    if(playerScore > computerScore){
        console.log("YOU WIN!!!");
    }else if(computerScore > playerScore){
        console.log("YOU LOST :(");
    }else{
        console.log("IT'S A DRAW!!!");
    }
}

playGame(5);