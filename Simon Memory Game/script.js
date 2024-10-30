//  variables to keep track of game state

var sequence = []; // Stores the sequence of button presses
var playerSequence = []; // Stores the sequence of button presses by the player
var level = 1; // Current level of  game
var score = 0; // Score of the player
var gameStarted = false; // Indicates whether the game has started or not
var timeoutDuration = 1000; // Initial duration between button flashes

// Store references to Document Object Model(Dom) elements

const startButton = document.querySelector('.start-button');
const startcircle = document.querySelector('.small-circle');
const buttons = document.querySelectorAll('.button');
const scoreDisplay = document.querySelector('.score-display');
const highestScoreDisplay = document.querySelector('.highest-score');


// Function to generate a random sequence
function generateSequence() {
    
    sequence.push(Math.floor(Math.random() * 4)); // 4 colors

}

// Event listener for  start button
startButton.addEventListener('click', () => {
    if (!gameStarted) {
        startGame();
    } else {
        restartGame();
    }
});

// Event listener for each button
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (gameStarted) {
            playerSequence.push(index);
            checkPlayerInput();
        }
    });
});

// Function to start the game
function startGame() {
    sequence = [];
    playerSequence = [];
    score = 0;
    scoreDisplay.textContent = '00';
    gameStarted = true;
    startButton.textContent = 'START';
    generateSequence();
    playSequence();
}

// Function to restart the game
function restartGame() {
    sequence = [];
    playerSequence = [];
    level = 1;
    score = 0;
    gameStarted = false;
    startButton.textContent = 'START';
    scoreDisplay.textContent = '00';
}



// Function to play the sequence of button presses
function playSequence() {
    let i = 0;
    const interval = setInterval(() => {
        if (i < sequence.length) {
            flashButton(buttons[sequence[i]]);
            i++;
        } else {
            clearInterval(interval);
        }
    }, timeoutDuration);
}

// Function to flash a button
function flashButton(button) {
    button.classList.add('active');
    setTimeout(() => {
        button.classList.remove('active');
    }, 500); //  duration of button flash
    
}

// Function to check if player input matches the sequence
function checkPlayerInput() {
    const currentLevel = playerSequence.length - 1;
    if (playerSequence[currentLevel] === sequence[currentLevel]) {
        if (playerSequence.length === sequence.length) {
            score++;
            if (score > parseInt(highestScoreDisplay.textContent)) {
                highestScoreDisplay.textContent = score < 10 ? '0' + score : score;
            }
            scoreDisplay.textContent = score < 10 ? '0' + score : score;
            if (score === 5 || score === 9 || score === 13) {
                // Speed up the game 
                timeoutDuration -= 50;
            }
            level++;
            playerSequence = [];
            generateSequence();
            setTimeout(playSequence, 800);
        }
    } else {
        // Player made a mistake
        endGame();
        
    }
}

// Function to end the game
function endGame() {
    flashAllButtons(5);
    setTimeout(() => {
        restartGame();
    }, 1500); // duration of flashing all buttons
}

// Function to flash all buttons
function flashAllButtons() {
    buttons.forEach(button => {
        button.classList.add('active');
    });
    setTimeout(() => {
        buttons.forEach(button => {
            button.classList.remove('active');
        });
    }, 300);
}
