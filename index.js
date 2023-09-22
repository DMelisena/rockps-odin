//Function for opponent's choice of attack
function getComputerChoice(){
    computerChoiceArr=["rock","paper","scissor"]
    result=computerChoiceArr[Math.floor(Math.random()*computerChoiceArr.length)]
    return result
}

//choices selection variables
let playerSelection=prompt(" What would you use? rock, paper or scissor?")
let computerSelection=getComputerChoice()

//Game's output
winning =`You used ${playerSelection},The Opponent use ${computerSelection}, You won! ${playerSelection} beats ${computerSelection} `
draw =`You used ${playerSelection},Both of you used ${playerSelection}, It's a tie`
losing = `You used ${playerSelection},The Opponent use ${computerSelection}, You lose! ${computerSelection} beats ${playerSelection}`
function playRound(playerSelection,computerSelection){
    if (computerSelection=="scissor" && playerSelection=="rock"){
        return winning
    }
    else if (computerSelection=="paper" && playerSelection=="scissor"){
        return winning
    }
    else if (computerSelection=="rock" && playerSelection=="paper"){
        return winning
    }
    else if (computerSelection==playerSelection){
        return draw
    }
    else {
        return losing
     }
}
//Show on console log what's going on
//console.log(computerSelection,playerSelection)
//console.log(playRound(playerSelection,computerSelection))
use=''
//console to run when opening the web
function game(use){
    //let playerSelection=prompt(" What would you use? rock, paper or scissor?").toLowerCase()
    let playerSelection=use.toLowerCase()
    computerSelection=getComputerChoice()
    console.log(computerSelection)
    console.log(playRound(playerSelection,computerSelection))
}

document.getElementById("rockButton").addEventListener("click",function(){game("rock")})
document.getElementById("paperButton").addEventListener("click",function(){game("paper")})
document.getElementById("scissorButton").addEventListener("click",function(){game("scissor")})