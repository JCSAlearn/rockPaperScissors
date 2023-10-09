//global 
const option = ["Rock" , "Paper" , "Scissors"];

function getComputerChoice () {
    
    let getChoice = Math.floor((Math.random()*100)+1);
    console.log(getChoice)
    if (getChoice <= 33){
        return option[0];
    } else if (getChoice >= 66) {
        return option[2];
    } else {
        return option[1]
    }
}

function gameOn(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        return console.log("It's a Draw!!!");
    } else if (playerSelection == option[0]) {
        
        //Rock vs paper and Scissors
        switch (computerSelection){ 
            case option[1]:
                console.log("You Loose!");
                break;
            case option[2]:
                console.log("YATAAAAA! You Win");
                break;
        }

        // Paper vs Scissors and Rock
    } else if (playerSelection == option[1]) {
        switch (computerSelection){ 
            case option[2]:
                console.log("You Loose!");
                break;
            case option[0]:
                console.log("YATAAAAA! You Win");
                break;
        }

        // Scissors vs Rock and Paper
    }else if (playerSelection == option[2]) {
        switch (computerSelection){ 
            case option[0]:
                console.log("You Loose!");
                break;
            case option[1]:
                console.log("YATAAAAA! You Win");
                break;
        }
    }
}