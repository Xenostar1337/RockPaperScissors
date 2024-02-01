
//function for choosing rock, paper or scissors
function getComputerChoice(){
 const choice = ["Rock", "Paper", "Scissors"]   ;
 const answer = Math.floor(Math.random() * choice.length);

 return choice[answer];
}



//function to play 1 round of rock/paper/scis
function playRound(playerSelection, computerChoice) {
    let declaration;
    if (computerChoice.toLowerCase() === playerSelection.toLowerCase()){
        declaration = "TIE" //declaration of a tie
    }
    //computer chooses paper
    if (computerChoice === "Paper") { 
        if (playerSelection.toLowerCase() === "scissors") {
            declaration = "Scissors beats Paper, you win."
              }  
        else if (playerSelection.toLowerCase() === "rock") {
            declaration = "Paper beats Rock, you lose!"
        }}

    //computer chooses Scissors
    if (computerChoice === "Scissors") { 
        if (playerSelection.toLowerCase() === "rock") {
            declaration = "Rock beats Scissors, you win."
               }  
        else if (playerSelection.toLowerCase() === "paper") {
            declaration = "Scissors beats Paper, you lose!"
        }}

    //coomputer chooses rock
    if (computerChoice === "Rock") { 
        if (playerSelection.toLowerCase() === "paper") {
            declaration = "Paper beats Rock, you win."
                          }  
        else if (playerSelection.toLowerCase() === "scissors") {
            declaration = "Rock beats Scissors, you lose!"
        }}
    
    return declaration;
  
  }


  //function to play 5 rounds and keep score
  function playGame() {
    let results;     
    let resultsPlayer = 0;
    let resultsComputer = 0;
    let loopNum = 5;
   
        while (loopNum > 0){
            const computerChoice = getComputerChoice();
            let playerSelection = prompt("Rock, Paper, or Scissors?");
            let insideResults = playRound(playerSelection, computerChoice);       
            if (insideResults.slice(-1) === "!") {
            resultsComputer += 1;
              }
            if (insideResults.slice(-1) === ".") {
            resultsPlayer += 1;
        }
        loopNum -= 1;
        console.log(resultsComputer + "c");
        console.log(resultsPlayer + "p");
        console.log(insideResults);
        }


        

        if (resultsPlayer > resultsComputer){
           results = "Player score:"+ resultsPlayer + "  Computer Score:" + resultsComputer + "  You have beaten the machine!";
        }
        else if (resultsPlayer < resultsComputer){
             results = "Player score:"+ resultsPlayer + "  Computer Score:" + resultsComputer + "  You have lost to the machine!";
        } else  {results = "Player score:"+ resultsPlayer + "  Computer Score:" + resultsComputer + "  You are equal!";
                }

        
        return results;
       
    }  
//call functions

console.log(playGame());