const clock=document.querySelector('.clock');

setInterval(function(){
  let todaysDate=new Date();
  clock.innerHTML=todaysDate.toLocaleTimeString();
},1000);