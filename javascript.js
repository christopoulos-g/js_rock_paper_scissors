const choices_array = ["rock", "paper", "scissors"];

game();

function computerPlay(){
    let result = 1;
    let random_int = Math.floor(Math.random()*3);
    result = choices_array[random_int];
    return result;
}

function playRound(playerSelection, computerSelection){
    let result= "You entered an undefined value! Please choose ONLY between rock, paper and scissors!";
    console.log(playerSelection, computerSelection);
    
    if(computerSelection == "rock" && playerSelection == "rock"){
        result = "It's a draw!";
    }else if(computerSelection == "rock" && playerSelection == "paper"){
        result = "Player wins!";
    }else if(computerSelection == "rock" && playerSelection == "scissors"){
        result = "Computer wins!";
    }

    if(computerSelection == "paper" && playerSelection == "rock"){
        result = "Computer wins!";
    }else if(computerSelection == "paper" && playerSelection == "paper"){
        result = "It's a draw!";
    }else if(computerSelection == "paper" && playerSelection == "scissors"){
        result = "Player wins!";
    }

    if(computerSelection == "scissors" && playerSelection == "rock"){
        result = "Player wins!";
    }else if(computerSelection == "scissors" && playerSelection == "paper"){
        result = "Computer wins!";
    }else if(computerSelection == "scissors" && playerSelection == "scissors"){
        result = "It's a draw!";
    }    

    return result;
}   

/* c_score means computer wins .
   p_score means player wins . */

function game(){

let p_score = 0;
let c_score = 0;
const computerSelection = computerPlay();
    for(let i = 0; i < 5; i++){
        let input = prompt("Rock, paper or scissors. Pick one!");
        let playerSelection = input.toLowerCase();
        alert(`Your choice was ${playerSelection}.`)

        playRound();
        console.log(playRound(playerSelection, computerSelection));
        if(result = "Player wins!"){
            p_score++;
        }else if(result = "Computer wins!"){
            c_score++;
        }
    }
    if(p_score++ > c_score){
        console.log("Best of 5 is the player!")
    }else if(c_score >> p_score){
        console.log("Best of 5 is the computer!")
    }else if (c_score == p_score){
        console.log("It's a draw...")
    }
}