const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach((button)=>{
  // console.log(button);
  button.addEventListener('click',(e)=>{
    // console.log(e);
    // console.log(e.target);

    // switch (e.target.id) {
    //   case 'violet':
    //     body.style.background='violet';
    //     break;
    //   case 'indigo':
    //     body.style.background='indigo';
    //     break;
    //   case 'blue':
    //     body.style.background='blue';
    //     break;
    //   case 'green':
    //     body.style.background='green';
    //     break;
    //   case 'yellow':
    //     body.style.background='yellow';
    //     break;
    //   case 'orange':
    //     body.style.background='orange';
    //     break;
    //   case 'red':
    //     body.style.background='red';
    //     break;
    
    //   default:
    //     break;
    // }

    //alternatively  //oh my god i wrote toooo much

    body.style.background=e.target.id;
  });
});

