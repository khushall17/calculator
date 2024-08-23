const display = document.getElementById('display');
let currentInput = '';
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ""
}

function clearValue(){
    display.value = display.value.slice(0, -1);
}

function calculatePercentage() {
    display.value = (20 / 100)*display.value;
        
    }


function calculate(){
   
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}