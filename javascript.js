const rockBtn = document.getElementById("rock_btn");
const paperBtn = document.getElementById("paper_btn");
const scissorsBtn = document.getElementById("scissors_btn");
const roundResult = document.getElementById("round_result");
const gameResult = document.getElementById("game_result");
const score = document.getElementById("score");
const computer_output = document.getElementById("computer_choice");

let p_score = 0;  /* c_score means computer wins . p_score means player wins . */
let c_score = 0;


rockBtn.addEventListener('click', function() {
    game('rock');
});
paperBtn.addEventListener('click', function() {
    game('paper');
});
scissorsBtn.addEventListener('click', function() {
    game('scissors');
});


function computerPlay(){
    const choices_array = ["rock", "paper", "scissors"];
    let result;
    let random_int = Math.floor(Math.random()*3);
    result = choices_array[random_int];
    return result;
}



function playRound(playerSelection,computerSelection){
    let result;

    if(computerSelection == "rock" && playerSelection == "rock"){
        result = "It's a draw.. No points are awarded!";
    }else if(computerSelection == "rock" && playerSelection == "paper"){
        result = "Player wins this round!";
    }else if(computerSelection == "rock" && playerSelection == "scissors"){
        result = "Computer wins this round!";
    }

    if(computerSelection == "paper" && playerSelection == "rock"){
        result = "Computer wins this round!";
    }else if(computerSelection == "paper" && playerSelection == "paper"){
        result = "It's a draw.. No points are awarded!";
    }else if(computerSelection == "paper" && playerSelection == "scissors"){
        result = "Player wins this round!";
    }

    if(computerSelection == "scissors" && playerSelection == "rock"){
        result = "Player wins this round!";
    }else if(computerSelection == "scissors" && playerSelection == "paper"){
        result = "Computer wins this round!";
    }else if(computerSelection == "scissors" && playerSelection == "scissors"){
        result = "It's a draw.. No points are awarded!";
    }    

    return result;
}   

function gameOver(p_score,c_score){
    if(p_score == 5 || c_score == 5){
        return true;
    }else{
        return false;
    }
}


function game(selection){

    const computerSelection = computerPlay();
    let playerSelection = selection;
    let result = playRound(playerSelection,computerSelection);
    

    if(result == "Player wins this round!"){
        p_score++;
    }else if(result == "Computer wins this round!"){
        c_score++;
    }
    score.textContent = p_score + ' + ' + c_score;
    roundResult.textContent = result ;
    computer_output.textContent = 'Enemy picked ' + computerSelection;

    if(gameOver(p_score,c_score) === true){
        if(p_score > c_score){
            gameResult.textContent = "You are the winner!";
        }else {
            gameResult.textContent = "You lost..";
        }
    }
    return;
}


/* STABLE FULL WORKING JS.
TODO 
- ENHANCE CSS STYLES / HTML
- RESTART GAME SETTING
- FOOBAR GIT 
- AT 5 POINTS DISPLAY WINNER WINDOW WITH PLAY AGAIN OR QUIT(WITH UNRESPONSIVE CONTROLS)
*/