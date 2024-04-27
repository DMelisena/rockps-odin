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
  console.log(enemyChoice)

}
getComputerChoice()

