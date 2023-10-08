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

function gameOn(playerSelection, ComputerSelection) {

}