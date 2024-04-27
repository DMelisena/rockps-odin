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

function playRound(humanChoice,computerChoice){
  if (humanChoice==computerChoice){
    console.log("draw");
  }
  else if (humanChoice=="R"){
      if (computerChoice=="S"){
        console.log("You Win")
        }
      else{
        console.log("You Lose")
        }
  }
  else if (humanChoice=="S"){
      if (computerChoice=="P"){
        console.log("You Win")
        }
      else{
        console.log("You Lose")
        }
  }
  else {
      if (computerChoice=="R"){
        console.log("You Win")
        }
      else{
        console.log("You Lose")
        }
  }
}
  const human = getHumanChoice();
  const computer = getComputerChoice();
  playRound(human,computer)
