/* Start Code */


/* Generates Computer Choice and returns it */
function getComputerChoice (){
    let x = Math.floor(Math.random() * 3);
   
   if (x == 0){
    return "Rock";
} else if (x == 1){
    return "Paper";
} else if (x == 2){
    return "Scissors"
};
}

/*console.log(getComputerChoice())*/

/* Generates Human Choice and returns it */
function getHumanChoice (){
    let userInput = prompt("Please choose Rock, Paper or Scissors:")
    return userInput;
}

/*console.log(getHumanChoice())


/* States Player Scores */
let humanScore = 0;
let computerScore = 0;



