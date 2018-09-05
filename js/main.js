window.addEventListener('load', init);
//game levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

//change level
const  currentLevel = levels.easy;

//Globals
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'Andela',
    'Developer',
    'Google',
    'Character',
    'Joe'
];

//Initialize Game
function init() {
//load word from array
showWord(words);
//start matching on word input
wordInput.addEventListener('input', startMatch);
//call countdown every second
setInterval(countdown, 1000);
//check game status
setInterval(checkstatus, 50);
}

//start match
function startMatch() {
    if(matchwords()) {  
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score ++;
    }

    //check score value
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

//match current to word input
function matchwords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}
//pick & show random word
function showWord(words) {
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown()  {
    //check time is not run out.
    if(time > 0) {
        //decrement time
        time --;
    } else if(time === 0) {
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}

//check game status
function checkstatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over';
        score = -1;
    }
}
