let resultsPlayer = 0;
let resultsComputer = 0;


//function for choosing rock, paper or scissors
function getComputerChoice(){
 const choice = ["Rock", "Paper", "Scissors"]   ;
 const answer = Math.floor(Math.random() * choice.length);

 return choice[answer];
}

// function to handle score based off return of playRound. Called within playRound
function addScore(declaration){


   if (resultsComputer < 5 && resultsPlayer < 5){
        if (declaration.slice(-1) === "!") {
            resultsComputer += 1;
        }
        if (declaration.slice(-1) === ".") {
            resultsPlayer += 1;
        }

        console.log(resultsComputer);
        console.log(resultsPlayer);
        console.log(declaration);
        playerBox.textContent = resultsPlayer.toString();
        computerBox.textContent = resultsComputer.toString();
        scoreWin.textContent = declaration;
            
        if (resultsComputer === 5){
            scoreWin.textContent = "You. Lose."
            scoreWin.style.color = "red"
            document.querySelector('.reset').style.visibility = 'visible';

         } else if (resultsPlayer === 5) {

              scoreWin.textContent = "Winner! Winner! Chicken Dinner!"
              scoreWin.style.color = "purple"
              document.querySelector('.reset').style.visibility = 'visible';
            }
    }
}




//function to play 1 round of rock/paper/scis
function playRound(playerSelection) {
    let declaration;
    let computerChoice = getComputerChoice();
   
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
    addScore(declaration);
    return declaration;
    
  }

function playerSelect(event) {
    const playerSelection = event.target.textContent;
    playRound(playerSelection);
}



const rockButton = document.querySelector('.choices button:nth-child(1)');
const paperButton = document.querySelector('.choices button:nth-child(2)');
const scissorsButton = document.querySelector('.choices button:nth-child(3)');
const playerBox = document.querySelector('#playerScore');
const computerBox = document.querySelector('#computerScore');
const scoreWin = document.querySelector('.scoreText');
const restartButton = document.querySelector('#restartButton');

rockButton.addEventListener('click', playerSelect);
paperButton.addEventListener('click', playerSelect);
scissorsButton.addEventListener('click', playerSelect);
restartButton.addEventListener('click', function() {
    location.reload(); // Reload the page
});


