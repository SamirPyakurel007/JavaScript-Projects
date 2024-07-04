// --------------add-icon---------------
let addIcon=document.querySelector('.add-task-icon');
let openTab=document.querySelector('.task-tab');
let addButton=document.querySelector('.add-task-btn');
let scheduleBtn=document.querySelector('.schedule-btn');
let cross=document.querySelector('.cross');
let cross1=document.querySelector('.cross1');
let scheduleTab=document.querySelector('.schedule-tab');

addIcon.addEventListener('click',()=>{
  addIcon.classList.add('active');
  openTab.classList.add('open-tab');
  addButton.classList.add('remove');
  scheduleBtn.classList.add('remove');
  cross.classList.add('remove');
});

scheduleBtn.addEventListener('click',()=>{
  openTab.classList.remove('open-tab');
  addButton.classList.remove('remove');
  cross.classList.remove('remove');
  scheduleBtn.classList.remove('remove');
  scheduleTab.classList.add('open-schedule');
  cross1.classList.add('remove');
});

cross.addEventListener('click',(e)=>{
  if(e.target.tagName==='IMG'){
    openTab.classList.remove('open-tab');
    addIcon.classList.remove('active');
    addButton.classList.remove('remove');
    scheduleBtn.classList.remove('remove');
    cross.classList.remove('remove');
  }

},false);

cross1.addEventListener('click',(e)=>{
  if(e.target.tagName==='IMG'){
    openTab.classList.add('open-tab');
    addButton.classList.add('remove');
    scheduleBtn.classList.add('remove');
    cross.classList.add('remove');
    cross1.classList.remove('remove');
    scheduleTab.classList.remove('open-schedule');
  }

},false);
//----------------add-button------------

document.addEventListener('DOMContentLoaded', ()=>{
  addButton.addEventListener('click',()=>{

    let taskName=document.querySelector('#task-name');
    let description=document.querySelector('#description');
    let taskList=document.querySelector('.task-list');
  
    if(taskName.value===''){
      alert('write something!!!');
    }else{
      let list=document.createElement('li');
      list.innerHTML=taskName.value;
      taskList.appendChild(list);
      let image=document.createElement('img');
      image.setAttribute("src", "./images/circle.svg");
      list.appendChild(image);
      let span=document.createElement('span');
      span.innerHTML='\u00d7';
      list.appendChild(span);
    
      if(description.value!==''){
        let para=document.createElement('p');
        para.innerHTML=description.value;
        para.id='para';
        list.appendChild(para);
      
      }
    }
    taskName.value="";
    description.value="";
  
  });
});

let taskList=document.querySelector('.task-list');

taskList.addEventListener('click', (e)=>{
  if(e.target.tagName==='IMG'){
    if(e.target.getAttribute('src')==='./images/circle.svg'){
      e.target.setAttribute("src", "./images/check.svg");
      e.target.parentElement.classList.add('checked');
    }else{
      e.target.setAttribute("src", "./images/circle.svg");
      e.target.parentElement.classList.remove('checked');
    }

  }else if(e.target.tagName==='SPAN'){
    e.target.parentElement.remove();
  }

}, false);

function saveData(){
  localStorage.setItem('data',taskList.innerHTML);
}

function showTask(){
  taskList.innerHTML=localStorage.getItem('data');
}


