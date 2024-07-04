const randomColor= function(){
  const hex='0123456789abcdef';
  let color='#';
  for(let i=0; i<6; i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
}

const body= document.querySelector('body');
const start= document.querySelector('#start');
const stopIt= document.querySelector('#stop');

start.addEventListener('click', function(){
  const started=setInterval(function(){
    body.style.background=`${randomColor()}`;
  }, 1000);
  stopIt.addEventListener('click', function(){
    body.style.background='black';
    clearInterval(started);
  });
});

