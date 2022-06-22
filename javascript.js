const choices_array = ["rock", "paper", "scissors"];

function computerPlay(){
    let result = 1;
    let random_int = Math.floor(Math.random()*3);
    result = choices_array[random_int];
    return result;
}

function playRound(playerSelection, computerSelection){
    let result= "";
    
    console.log(playerSelection, computerSelection);
    
    if(computerSelection == "rock" && playerSelection == "rock"){
        return result = "It's a draw!";
    }
    else if(computerSelection == "rock" && playerSelection == "paper"){
        return result = "Player wins!";
    }
    else if(computerSelection == "rock" && playerSelection == "scissors"){
        return result = "Computer wins!";
    }

    if(computerSelection == "paper" && playerSelection == "rock"){
        return result = "Computer wins!";
    }
    else if(computerSelection == "paper" && playerSelection == "paper"){
        return result = "It's a draw!";
    }
    else if(computerSelection == "paper" && playerSelection == "scissors"){
        return result = "Player wins!";
    }

    if(computerSelection == "scissors" && playerSelection == "rock"){
        return result = "Player wins!";
    }
    else if(computerSelection == "scissors" && playerSelection == "paper"){
        return result = "Computer wins!";
    }
    else if(computerSelection == "scissors" && playerSelection == "scissors"){
        return result = "It's a draw!";
    }    
}   

let input = prompt("Rock, paper or scissors. Pick one!");
let playerSelection = input.toLowerCase();
alert(`Your choice was ${playerSelection}.`)

const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));