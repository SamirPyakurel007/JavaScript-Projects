const container=document.querySelector('.container');

document.querySelector('.theme-toggle-button').addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  const currentRotation=parseInt(getComputedStyle(container).getPropertyValue('--rotation'));
  container.style.setProperty('--rotation', currentRotation + 180);
})