console.log("Hello World");
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let enemyChoice="";
function getComputerChoice(){
  let rand = getRandomInt(3);
  let strand = (rand.toString());
  switch(strand){
    case"0":
    enemyChoice = "R"
      break;
    case"1":
    enemyChoice = "P"
      break;
    case"2":
    enemyChoice = "S"
      break;
  }
  return enemyChoice

}
let myChoice="";
function getHumanChoice(){
  myChoice=window.prompt("pick R, S, or P","R");
  return myChoice
}
let humanScore=0;
let computerScore=0;
function playRound(humanChoice,computerChoice){
  if (humanChoice==computerChoice){
    console.log("draw");
  }
  else if (humanChoice=="R"){
      if (computerChoice=="S"){
        console.log("You Win")
        humanScore+=1
        }
      else{
        console.log("You Lose")
        computerScore+=1
        }
  }
  else if (humanChoice=="S"){
      if (computerChoice=="P"){
        console.log("You Win")
        humanScore+=1
        }
      else{
        console.log("You Lose")
        computerScore+=1
        }
  }
  else {
      if (computerChoice=="R"){
        console.log("You Win")
        humanScore+=1
        }
      else{
        console.log("You Lose")
        computerScore+=1
        }
  }
}
function playGame(){
  
  let human = getHumanChoice();
  let computer = getComputerChoice();
  playRound(human,computer)
  human = getHumanChoice();
  computer = getComputerChoice();
  playRound(human,computer)
  human = getHumanChoice();
  computer = getComputerChoice();
  playRound(human,computer)
  human = getHumanChoice();
  computer = getComputerChoice();
  playRound(human,computer)
  human = getHumanChoice();
  computer = getComputerChoice();
  playRound(human,computer)
  if(humanScore>computerScore){
    console.log("You Won, the score are "+humanScore+" - "+computerScore)
  }
  else if(computerScore>humanScore){
    console.log("You lose, the score are "+humanScore+" - "+computerScore)
  }
  else{
    console.log("No body wins, or.. everyone is a winner!! It's "+computerScore+" - "+humanScore)
  }
}
playGame()
