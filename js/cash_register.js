var phoneCalculator = calculatorModule();
var presentDisplay = '';
var displayBox = document.getElementById('display');
  display.innerHTML = presentDisplay;

var storedNum = 0;

function updateDisplay(content){
   var display = document.getElementById('display');
   display.innerHTML = display.innerHTML + content;
}

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