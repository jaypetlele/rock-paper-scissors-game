/* Start Code */


/* Generates Computer Choice and returns it */
function getComputerChoice (){
    let x = Math.floor(Math.random() * 3);
   
   if (x === 0){
    return "Rock";
} else if (x === 1){
    return "Paper";
} else if (x === 2){
    return "Scissor"
};
}



/* Generates Human Choice and returns it */
function getHumanChoice (){
    let userInput = prompt("Please choose Rock, Paper or Scissor:").toLocaleLowerCase();
    return userInput;
}


/* States Player Scores */
var humanScore = 0;
var computerScore = 0;


/* Logic to play one Round */
function playRound(humanChoice, computerChoice) {
   
    if (humanChoice === computerChoice){
        console.log("It's a tie")

    } else if ((humanChoice === "rock" && computerChoice === "Paper")
               || (humanChoice === "paper" && computerChoice === "Scissor")
               || (humanChoice === "scissor" && computerChoice === "Rock"))
            { 
                computerScore++;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`); 

    }else if ((humanChoice === "paper" && computerChoice === "Rock")
        || (humanChoice === "scissor" && computerChoice === "Paper")
        || (humanChoice === "rock" && computerChoice === "Scissor"))
     {
        humanScore++;
 console.log(`You Win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`); 
    }else{ console.log ("Invalid choice!\nPlease enter Rock, Paper, or Scissor")}
        }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)