let display=document.getElementById('display');

function appendToDisplay(key){
  display.value +=key;
}

function clearDisplay(){
  display.value='';
}

function clearLast(){
  display.value=display.value.toString().slice(0,-1);
}

function calculate(){
  try{
    display.value =eval(display.value);
    display.value += '';
  }
  catch(error){
    display.value="ERROR";
  }
}

function appendToDisplayPercent(key2){
  display.value=eval(0.01*display.value);
}