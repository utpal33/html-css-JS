const gameContainer = document.getElementById('game-container');
const currentResultMsg = document.querySelector('.result-msg');
const winnerResultMsg = document.querySelector('.winner-msg');
const computerScore = document.getElementById('computer-score');
const playerScore = document.getElementById('player-score');
const resetBtn = document.getElementById('reset-game-btn');
const optionContainerEle = document.querySelector(".option-container")

// optimize event listener
gameContainer.addEventListener('click', (e)=>{
    console.log(e.target.value);
    const options = ['Rock', 'Paper', 'Scissors'];
    // console.log(e.);
    if(options.includes(e.target.value)){
        // hasPlayesrWonTheRound(e.target.value, getRandomComputerResult())
        getRoundResult(e.target.value)
    }

    if(e.target.id === 'reset-game-btn'){
        console.log(e.target.value);
        playAgain()
    }
})

// get random computer result
const getRandomComputerResult = () => {
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random()*options.length)]
}

function hasPlayesrWonTheRound(player, computer){

    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
}


let playerScoreResult =0;
let computerScoreResult = 0;

function getRoundResult(playerChoice){
    const computerChoice= getRandomComputerResult()
    if(hasPlayesrWonTheRound(playerChoice, computerChoice)){
        playerScoreResult+=1
        playerScore.textContent = playerScoreResult;
        currentResultMsg.innerHTML = `player wins: ${playerChoice} beats ${computerChoice}`;
    }
    else{
        computerScoreResult+=1;
        computerScore.innerText = computerScoreResult;
        currentResultMsg.innerHTML = `computer wins : ${computerChoice} beats ${playerChoice}`
    }
    
    if (playerScoreResult===3 || computerScoreResult===3){
        showFinalResult()
        playerScoreResult=0;
        computerScoreResult=0;
    }
}

function showFinalResult(){
    if(playerScoreResult>computerScoreResult){
        winnerResultMsg.innerHTML = `Plyer has Won the game`;    
    }
    else {
        winnerResultMsg.innerHTML = 'computer has won the game'
    }
    optionContainerEle.style.visibility = 'hidden';
    resetBtn.style.visibility='visible';
}

function playAgain(){
    console.log('playing agiain');
    playerScore.innerText = playerScoreResult;
    computerScore.innerText = computerScoreResult;

    resetBtn.style.visibility='hidden';
    optionContainerEle.style.visibility = 'visible';
}