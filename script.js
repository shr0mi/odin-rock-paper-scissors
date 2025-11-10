console.log("Hello world");

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

console.log(getHumanChoice());
console.log(getComputerChoice());