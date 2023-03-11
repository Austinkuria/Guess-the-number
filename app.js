const gameButtons = document.querySelectorAll('.game-btn');
const gameText = document.getElementsByClassName('game-text');
const gameInput = document.getElementById('game-input');
const gameAlert = document.querySelector('.game-alert');
const successSound = document.getElementById('correct-answer-sound');
const highSoundError = document.getElementById('wrong-answer-high-sound');
const lowSoundError = document.getElementById('wrong-answer-low-sound');

let secretNumber;
const bodyStyling = document.getElementById('body-styling');

// == equality operator "20" is equal 20
// === equality operator "20" is equal not 20

function newGame() {
    secretNumber = Math.floor(Math.random() * 300);
    // alert(secretNumber)
    gameAlert.innerText = "A new random number has been generated.Good luck  in guessing it";
};

function checkUserGuess() {
    let userGuess = gameInput.value
    if (userGuess === "") {
        gameText[1].innerText = "Provide a number!";
    }
    else if (secretNumber === parseInt(userGuess)) {
        gameText[1].innerText = "Hurray!!!You found the correct number,you have won"
        successSound.play();
        bodyStyling.style.backgroundColor = "gold";
    }

    else if (parseInt(userGuess) > secretNumber) {
        gameText[1].innerText = `${userGuess} is too high!`
        highSoundError.play();
        bodyStyling.style.backgroundColor = "greenyellow";
    }

    else if (parseInt(userGuess) < secretNumber) {
        gameText[1].innerText = `${userGuess} is too low!`
        lowSoundError.play();
        bodyStyling.style.backgroundColor = "lightblue";

    }
    gameInput.value = "";
    gameAlert.innerText = "";
}

// we pass by referrence  the function here
gameButtons[1].addEventListener('click', checkUserGuess)

document.addEventListener('keydown', function (event) {
    console.log(event);
    if (event.key == "Enter") {
        checkUserGuess();
    }
});

gameButtons[0].addEventListener('click', newGame)

document.addEventListener('keydown', function (event) {
    console.log(event)
    if (event.key == 'n') {
        newGame();
    }
});