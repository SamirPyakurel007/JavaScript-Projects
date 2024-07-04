document.addEventListener('DOMContentLoaded', ()=>{
  // let list= document.getElementById('list');
  let scheduleTab=document.querySelector('.schedule-tab');
  let taskList=document.querySelector('.task-list');

  if(taskList){
    taskList.addEventListener('click', (e)=>{
      if(e.target.tagName==='LI')
        scheduleTab.classList.add('open-schedule');
    });
  }
});

