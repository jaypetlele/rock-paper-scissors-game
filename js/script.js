/* Start Code */


/* Generates Computer Choice and returns it */
function getComputerChoice (){
    let x = Math.floor(Math.random() * 3);
   
   if (x === 0){
    return "rock";
} else if (x === 1){
    return "paper";
} else if (x === 2){
    return "scissor"
};
}



/* Generates Human Choice and returns it */
function getHumanChoice (){
    let userInput = prompt("Please choose Rock, Paper or Scissor:","");
    return userInput;
}


/* States Player Scores */
var humanScore = 0;
var computerScore = 0;

var roundCount = 0; /* Counts Game Rounds Played */

/* Function for whole game */ 

function playGame(){

    const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
    roundCount;

if (roundCount < 3){
    return playGame();

} else {
    console.log(`Game Over! Your Score is ${humanScore}, Your Opponent's Score is ${computerScore}`);
}

    /* Logic to play one Round */
function playRound(humanChoice, computerChoice) {
   humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice){
        console.log("It's a tie")
    } else if ((humanChoice === "rock" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "scissor")
        || (humanChoice === "scissor" && computerChoice === "rock"))
    { 
            roundCount++;
            computerScore++;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`); 
    }
    else if ((humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissor" && computerChoice === "paper")
        || (humanChoice === "rock" && computerChoice === "scissor"))
    {   
        roundCount++;
        humanScore++;
        console.log(`You Win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`); 
    }else
    { 
        console.log ("Invalid choice!\nPlease enter Rock, Paper, or Scissor")};
                                                }

                    

                                    


/* End of playGame */
                                            }

playGame()