var compCalculator = calculatorModule();

var operator = null;

var presentDisplay = '';

var boxNum = 0;

var mainDisplay = document.getElementById('display');
  mainDisplay.innerHTML = presentDisplay;

function updateDisplay(content){
  var calculatorDisplay = document.getElementById('display');
  calculatorDisplay.innerHTML = calculatorDisplay.innerHTML + content;
}

function clearDisplay(num){
  var calculatorDisplay = document.getElementById('display');
  calculatorDisplay.innerHTML = num;
}

//add function
var addNumbers = document.getElementById('add');
  addNumbers.addEventListener('click',function(){
    boxNum = parseFloat(mainDisplay.innerHTML);
    compCalculator.load(boxNum);
    operator = 'add';
    clearDisplay('');
  });
//subtract function
var subtractNumbers = document.getElementById('subtract');
  subtractNumbers.addEventListener('click',function(){
    boxNum = parseFloat(mainDisplay.innerHTML);
    compCalculator.load();
    operator = 'subtract';
  });
//multiply function
var multiplyNumbers = document.getElementById('multiply');
  multiplyNumbers.addEventListener('click',function(){
    boxNum = parseFloat(mainDisplay.innerHTML);
    compCalculator.load();
    operator = 'multiply';
  });
//divide function
var divideNumbers = document.getElementById('divide');
  divideNumbers.addEventListener('click',function(){
    boxNum = parseFloat(mainDisplay.innerHTML);
    compCalculator.load();
    operator = 'divide';
  });

var equalButton = document.getElementById('equal');
  equalButton.addEventListener('click',function(){
    boxNum = parseFloat(mainDisplay.innerHTML);
    switch(operator){
      case 'add':
        compCalculator.add(boxNum);
      break;
      case 'subtract':
        compCalculator.subtract();
      break;
      case 'multiply':
        compCalculator.multiply();
      break;
      case 'divide':
        compCalculator.divide();


    }
    mainDisplay.innerHTML=compCalculator.getTotal();
  });


//clear function
var clearButton = document.getElementById('clear');
  clearButton.addEventListener('click',function(){
    compCalculator.clearMemory();
    clearDisplay('');
  });

var showZero = document.getElementById('zero');
  showZero.addEventListener('click',function(){
    updateDisplay(0);
  });
var showOne = document.getElementById('one');
  showOne.addEventListener('click',function(){
    updateDisplay(1);
  });
var showTwo = document.getElementById('two');
  showTwo.addEventListener('click',function(){
    updateDisplay(2);
  });
var showThree = document.getElementById('three');
  showThree.addEventListener('click',function(){
    updateDisplay(3);
  });
var showFour = document.getElementById('four');
  showFour.addEventListener('click',function(){
    updateDisplay(4);
  });
var showFive = document.getElementById('five');
  showFive.addEventListener('click',function(){
    updateDisplay(5);
  });
var showSix = document.getElementById('six');
  showSix.addEventListener('click',function(){
    updateDisplay(6);
  });
var showSeven = document.getElementById('seven');
  showSeven.addEventListener('click',function(){
    updateDisplay(7);
  });
var showEight = document.getElementById('eight');
  showEight.addEventListener('click',function(){
    updateDisplay(8);
  });
var showNine = document.getElementById('nine');
  showNine.addEventListener('click',function(){
    updateDisplay(9);
  });