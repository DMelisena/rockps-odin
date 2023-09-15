function getComputerChoice(){
    computerChoiceArr=["rock","paper","scissor"]
    result=computerChoiceArr[Math.floor(Math.random()*computerChoiceArr.length)]
    return result
}
function playRound(playerSelection,computerSelection){
    if (computerSelection=="scissor" && playerSelection=="rock"){
        return `You won! ${playerSelection} beats ${computerSelection} `
    }
    else if (computerSelection=="paper" && playerSelection=="scissor"){
        return `You won! ${playerSelection} beats ${computerSelection} `
    }
    else if (computerSelection=="rock" && playerSelection=="paper"){
        return `You won! ${playerSelection} beats ${computerSelection} `
    }
    else if (computerSelection==playerSelection){
        return `Both of you used ${playerSelection}, It's a tie`
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
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