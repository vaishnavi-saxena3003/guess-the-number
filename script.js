'use strict';

//  HD event listener is required to bring changes const
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymess = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // const guess ka input user dega or user jo value deta h bydefault
  //wo string hoti h toh conversion krna hoga
  console.log(guess, typeof guess);
  if (!guess) {
    //document.querySelector('.message').textContent = 'no number!';
    // score -= 2;
    displaymess('no number!');
    document.querySelector('.score').textContent = score;
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'correct number';
    displaymess('correct number');
    document.querySelector('.number').textContent = secretNumber;
    //HD manipulating css
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      if (guess > secretNumber) {
        // document.querySelector('.message').textContent = 'too high';
        displaymess("'too high'");
        score -= 2;
        document.querySelector('.score').textContent = score;
      } else {
        //document.querySelector('.message').textContent = 'too low';
        displaymess('too low');
        score -= 2;
        document.querySelector('.score').textContent = score;
      }
    } else {
      //
      displaymess('you lost try again!!!');
    }
  }

  //   document.querySelector('.highscore').textContent = 0;
});
// document.querySelector to manipulate html
// HD to manipulate CCS
//
// CHAL#1

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guessing...';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
