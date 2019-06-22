// assigning all elements with the ghoice tag to a variable
const choices = document.querySelectorAll('.choice');

const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.getElementById('.modal');
const scoreboard = {
    player: 0,
    computer: 0
}

// Play game function
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    console.log(playerChoice, computerChoice, winner);
}

function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function getWinner(p, c) {
    if(p ===c) {
        return 'draw';
    } else if(p === 'rock') {
        if(c === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if(p === 'paper') {
        if(c === 'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if(p === 'scissors') {
        if(c === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice) {
    if(winner === 'player') {
        //increment player score
        scoreboard.player++;
        //modal result
        result.innerHTML = `
            <h1 class="text-win">You Win</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
            `;
    } else if(winner = 'computer') {
        //increment computer score
        scoreboard.computer++;
        //modal result
        result.innerHTML = `
            <h1 class="text-lose">You Lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
            `;
    } else {
        result.innerHTML = `
            <h1>It is A Draw</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
            `;
    }
}
// event listeners
choices.forEach(choice => choice.addEventListener('click', play));