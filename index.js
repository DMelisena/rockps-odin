function getComputerChoice(){
    computerChoiceArr=["Rock","Paper","Scissor"]
    result=computerChoiceArr[Math.floor(Math.random()*computerChoiceArr.length)]
    return result
}
function playRound(playerSelection,computerSelection){
    if (computerSelection=="Scissor" && playerSelection=="Rock"){
        return `You won! ${playerSelection} beats ${computerSelection} `
    }
    else if (computerSelection=="Paper" && playerSelection=="Scissor"){
        return `You won! ${playerSelection} beats ${computerSelection} `
    }
    else if (computerSelection=="Rock" && playerSelection=="Paper"){
        return `You won! ${playerSelection} beats ${computerSelection} `
    }
    else if (computerSelection==playerSelection){
        return `Both of you used ${playerSelection}, It's a tie`
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
     }
}
let playerSelection="Rock"
let computerSelection=getComputerChoice()
console.log(computerSelection,playerSelection)
console.log(playRound(playerSelection,computerSelection))

function game(){
    for (i=0;i<5;i++){
        console.log(i)
        console.log(playRound(playerSelection,computerSelection))
        computerSelection=getComputerChoice()
    }
}
game()