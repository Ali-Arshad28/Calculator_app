

const input = document.getElementById('input');

function appendValue(val){

input.value += val;

}


function clearResult(){

  input.value = " ";
  
  }

function calculate(){

input.value = eval(input.value);

}


backSpace = () => { input.value = input.value.slice(0,-1)}







