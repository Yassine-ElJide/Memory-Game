const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');
const startingPoint = 01;
let time = startingPoint * 60;
const countDown = document.querySelector('#time');
let flipped = false;
const header = document.querySelector('header');
let first , second ; 
var matches = 0;
cards.forEach((card) => card.addEventListener('click' , flipIt))

function flipIt(){
  this.classList.add('flip')
  if (!flipped) {
    first = this ; 
    flipped = true;
  } else{
    second = this ;
    flipped  = false;
    match();
  }
  if(matches === 6 ){
    alert('you won :) ')
  }
}

function match(){
  const match = first.dataset.framework === second.dataset.framework;
  match ? removeEvent() : unflip()
}

function removeEvent(){
  first.removeEventListener('click' , flipIt)
  second.removeEventListener('click' , flipIt)
  matches ++;
}
function unflip(){
  setTimeout(() => {
        first.classList.remove('flip');
        second.classList.remove('flip');
      }, 500)
}

(function disorder(){
  cards.forEach((card) => {
    const random = Math.floor(Math.random() * 12);
    card.style.order = random;
  })
})();


function timeSpent(){
  const minutes = Math.floor(time/60);
  let seconds = (time % 60);
  const check = seconds < 10 ? '0' + seconds : seconds;
  countDown.innerText = `${minutes}:${check}`
  if(modal.style.display === 'none'){
    time --;
  }
  if (minutes < 0 && seconds < 0) {
    countDown.innerText = '00:00'
  } 
}
setInterval(timeSpent, 1000);

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('.start');
  modal.style.display = 'block';
  start.addEventListener('click', function startGame(){
    modal.style.display = 'none';
  });
})




