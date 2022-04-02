'use strict';
// TODO don't forget to delete logs

// service function
const selectElement = (selector) => {
  return document.querySelector(selector);
};

// const for all the document
let gussedNumber = Math.trunc(Math.random() * 20) + 1;

// ! DELETE
console.log(gussedNumber);

const showNumber = selectElement('.number');
const checkBtn = selectElement('.check');
let inputGuess = selectElement('.guess');
const message = selectElement('.message');
let score = 20;

// function for work
const workedWithScore = (text) => {
  message.textContent = text;
  score--;
  selectElement('.score').textContent = score;
};

const youLost = () => {
  message.textContent = 'You lost the game!!!';
  selectElement('.score').textContent = 0;
};

const showMeTextScore = (text) => {
  if (score > 1) {
    workedWithScore(text);
  } else {
    youLost();
  }
};

const startGame = () => {
  const guess = +inputGuess.value;

  // when there is no input
  if (!guess || guess < 0) {
    message.textContent = '🤬 No number from game!';
    // when player wins
  } else if (guess === gussedNumber) {
    message.textContent = 'Correct Number! You win!';
    selectElement('body').style.backgroundColor = '#60b347';
    showNumber.style.width = '30rem';
    showNumber.textContent = gussedNumber;
    if (score > +selectElement('.highscore').textContent) {
      selectElement('.highscore').textContent = score;
    }
    checkBtn.removeEventListener('click', startGame);
    // when guess is too high
  } else if (guess > gussedNumber) {
    showMeTextScore('Too high!');
    // when guess is to low
  } else if (guess < gussedNumber) {
    showMeTextScore('Too low!');
  }
};

// if click button <check>
checkBtn.addEventListener('click', startGame);

// if ckick button <again>
selectElement('.again').addEventListener('click', () => {
  gussedNumber = Math.trunc(Math.random() * 20) + 1;
  inputGuess.value = '';
  message.textContent = 'Start guessing ...!';
  selectElement('body').style.backgroundColor = '#222';
  showNumber.style.width = '15rem';
  showNumber.textContent = '?';
  checkBtn.addEventListener('click', startGame);
  if (score > +selectElement('.highscore')) {
    selectElement('.highscore').textContent = score;
  }
  score = 20;
  selectElement('.score').textContent = score;
  // ! DELETE
  console.log(gussedNumber);
});
