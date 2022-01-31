let ballFirst = document.getElementById('ballfirst');
let ballFive = document.getElementById('ballfive');

ballFirst.addEventListener('click', startAnimate);
ballFive.addEventListener('click', finishAnimate);

function startAnimate() {
    ballFirst.classList.add('ballAnimateFirst');
    ballFive.classList.add('ballAnimateFive');
}

function finishAnimate() {
    ballFive.classList.add('ballFive');
    ballFirst.classList.add('ballOne');
}