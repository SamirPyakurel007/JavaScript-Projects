let randNumber=Math.floor(Math.random()*100 + 1);

const submit=document.querySelector('#subt');
const UserInput=document.querySelector('#input-field');
const guesses=document.querySelector('.guesses');
const remaining=document.querySelector('.remaining');
const lowOrHigh=document.querySelector('.loworhigh');

const result=document.querySelector('.result');

const p= document.createElement('p');

let prevGuesses=[];
let numGuesses=1;

let playGame=true;

if(playGame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const guess=parseInt(UserInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(guess<1 || guess>100 || isNaN(guess)){
    alert('please enter a valid Number');
  }else{
    prevGuesses.push(guess);
    if(numGuesses===10){
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randNumber}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess===randNumber){
    displayMessage(`You guessed it right`);
    endGame();
  }else if(guess>randNumber){
    displayMessage(`Number is Tooo High`);
  }else if(guess<randNumber){
    displayMessage(`Number is Tooo low`);
  }
}

function displayGuess(guess){
  UserInput.value='';
  guesses.innerHTML+=`${guess}, `;
  numGuesses++;
  remaining.innerHTML=`${10-numGuesses}`;
}

function displayMessage(message){
  lowOrHigh.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
  UserInput.value='';
  UserInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newgame">Start new game</h2>`;
  result.appendChild(p);
  playGame=false;
  newGame();
}

function newGame(){
  const newGameButton=document.querySelector('#newgame');
  newGameButton.addEventListener('click', (e)=>{
    randNumber=Math.floor(Math.random()*100 + 1);
    prevGuesses=[];
    numGuesses=1;
    guesses.innerHTML='';
    remaining.innerHTML=`${10-numGuesses}`;
    UserInput.removeAttribute('disabled');
    result.removeChild(p);
    playGame=true;
  });
}




