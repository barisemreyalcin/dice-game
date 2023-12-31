let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
let countTurn1 = 0;
let countTurn2 = 0;

let messageEl = document.getElementById("message");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("roll-btn");
const resetBtn = document.getElementById("reset-btn");

const img1 = document.querySelector(".image1");
const img2 = document.querySelector(".image2");

function showResetBtn() {
    rollBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
}

function showDiceBtn() {
    rollBtn.style.display = "inline-block";
    resetBtn.style.display = "none";
}

function removeStyle() {
    img2.classList.remove("show");
    player2Dice.classList.remove("active");
    img1.classList.remove("show");
    player1Dice.classList.remove("active");
}

function victory1() {
    messageEl.textContent = "Player 1 has won the game! 🥳";
}

function victory2() {
    messageEl.textContent = "Player 2 has won the game! 🥳";
}

rollBtn.addEventListener("click", function() {
    const dice = Math.floor(Math.random() * 6 ) + 1;

    if(player1Turn) {
        player2Dice.classList.add("active");
        player1Dice.classList.remove("active");
        img2.classList.add("show");
        img1.classList.remove("show");
        player1Score += dice;
        player1Scoreboard.textContent = player1Score;
        player1Dice.textContent = dice;
        player2Dice.textContent = "-";
        messageEl.textContent = "Player 2 Turn";
        countTurn1++;;
    } else {
        player1Dice.classList.add("active");
        player2Dice.classList.remove("active");
        img1.classList.add("show");
        img2.classList.remove("show");
        player2Score += dice;
        player2Scoreboard.textContent = player2Score;
        player2Dice.textContent = dice;
        player1Dice.textContent = "-";
        messageEl.textContent = "Player 1 Turn";
        countTurn2++;
    }

    let gap = 0;
    gap = player1Score - player2Score;
    
    if(player1Score > 19 && countTurn1 === countTurn2) {
        if(player2Score > player1Score) {
            victory2();
            removeStyle();
            showResetBtn();
        } else if(player1Score > player2Score){
            victory1();
            removeStyle();
            showResetBtn();
        }
    } else if(player1Score > 19 && gap > 6) {
        victory1();
        removeStyle();
        showResetBtn();
    } else if(player2Score > 19){
        victory2();
        removeStyle();
        showResetBtn();
    }

    player1Turn = !player1Turn;
})

resetBtn.addEventListener("click", function() {
    showDiceBtn();
    resetGame();
})

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    countTurn1 = 0;
    countTurn2 = 0;
    messageEl.textContent = "Player 1 Turn";
    player1Dice.textContent = "-";
    player2Dice.textContent = "-";
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    img1.classList.add("show");
    player1Dice.classList.add("active");
} 