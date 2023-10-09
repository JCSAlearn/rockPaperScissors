//global 
let computer = 0;
let human = 0;


function getComputerChoice () {
    
    let getChoice = Math.floor((Math.random()*100)+1);
    if (getChoice <= 33){
        return "Rock";
    } else if (getChoice >= 66) {
        return "Scissors";
    } else {
        return "Paper"
    }
}

function playerChoice() {
    let playerSelection = prompt("Rock, Paper Scissors?")
    return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        return console.log("It's a Draw!!!");

//Rock vs paper and Scissors
    } else if (playerSelection == "Rock") {
        switch (computerSelection){ 
            case "Paper":
                console.log("You Loose!");
                computer++;
                break;
            case "Scissors":
                console.log("YATAAAAA! You Win");
                human++;
                break;
        }

// Paper vs Scissors and Rock
    } else if (playerSelection == "Paper") {
        switch (computerSelection){ 
            case "Scissors":
                console.log("You Loose!");
                computer++;
                break;
            case "Rock":
                console.log("YATAAAAA! You Win");
                human++;
                break;
        }

// Scissors vs Rock and Paper
    }else if (playerSelection == "Scissors") {
        switch (computerSelection){ 
            case "Rock":
                console.log("You Loose!");
                computer++;
                break;
            case "Paper":
                console.log("YATAAAAA! You Win");
                human++;
                break;
        }
    }
}

function game() {
    for (let i = 0; i < 5 ; i++) {
    playRound(playerChoice(), getComputerChoice());
    }
    if (human > computer) {
        console.log("Human Wins");
        computer = 0;
        human = 0;
    } else {
        console.log("Computer Wins");
        human, computer = 0;
        human = 0;
    }
}