function getComputerChoice(){
    computerChoiceArr=["rock","paper","scissor"]
    result=computerChoiceArr[Math.floor(Math.random()*computerChoiceArr.length)]
    return result
}
winning =`The Opponent use ${computerSelection}, You won! ${playerSelection} beats ${computerSelection} `
draw =`Both of you used ${playerSelection}, It's a tie`
losing = `The Opponent use ${computerSelection}, You lose! ${computerSelection} beats ${playerSelection}`
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
let playerSelection=prompt(" What would you use? rock, paper or scissor?")
let computerSelection=getComputerChoice()
console.log(computerSelection,playerSelection)
console.log(playRound(playerSelection,computerSelection))

function game(){
    for (i=0;i<5;i++){
        console.log(i)
        let playerSelection=prompt(" What would you use? rock, paper or scissor?").toLowerCase()
        console.log(playRound(playerSelection,computerSelection))
        computerSelection=getComputerChoice()
    }
}
game()