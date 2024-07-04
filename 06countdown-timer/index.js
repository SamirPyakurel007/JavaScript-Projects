let time = document.getElementById('time');
let startBtn = document.querySelector('.input-field button');
let timeTabs = document.querySelectorAll('.time-tabs h1');

let countdown; 
startBtn.addEventListener('click', () => {
  if (time.value === "") {
    alert('choose a time');
  } else {
    clearInterval(countdown); 
    let totalTime = calcTotalSec();

    function getRemainingTime() {
      if (totalTime <= 0) {
        clearInterval(countdown);
        return;
      }

      let timeInHour = Math.floor(totalTime / 3600);
      let timeInMin = Math.floor((totalTime % 3600) / 60);
      let timeInSec = Math.floor((totalTime % 3600) % 60);
      let allTime = [timeInHour, timeInMin, timeInSec];
      
      timeTabs.forEach(function (timeTab, index) {
        timeTab.innerHTML = allTime[index].toString().padStart(2, '0');
      });
      totalTime--;
    }

    getRemainingTime(); 
    countdown = setInterval(getRemainingTime, 1000); 
  }
}, false);

function calcTotalSec() {
  let [hour, minute] = time.value.split(':').map(Number);
  let totalSec = hour * 60 * 60 + minute * 60;
  return totalSec;
}