// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

let chances = 3;
let isGameOver = false;

document.getElementById('guessInput').addEventListener('input', function() {
    const submitBtn = document.getElementById('submitBtn');
    const retryBtn = document.getElementById('retryBtn');
    submitBtn.disabled = isNaN(this.value) || this.value < 1 || this.value > 10;
    retryBtn.disabled = true;
});

function checkGuess() {
    if (isGameOver) return;

    const guessInput = document.getElementById('guessInput');
    const messageElement = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');
    const retryBtn = document.getElementById('retryBtn');

    const playerGuess = parseInt(guessInput.value);

    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 10) {
        messageElement.textContent = 'Please enter a valid number between 1 and 10.';
        return;
    }

    chances--;

    if (playerGuess === randomNumber) {
        messageElement.textContent = 'Congratulations! You guessed the correct number!';
        isGameOver = true;
        retryBtn.disabled = false;
    } else {
        messageElement.textContent = `Sorry, wrong guess. ${chances} ${chances === 1 ? 'chance' : 'chances'} left.`;

        if (chances === 0) {
            messageElement.textContent = `Out of chances! The correct number was ${randomNumber}.`;
            isGameOver = true;
            retryBtn.disabled = false;
        }
    }

    submitBtn.disabled = true;
}

function retryGame() {
    isGameOver = false;
    chances = 3;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('retryBtn').disabled = true;
}
