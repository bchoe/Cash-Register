var dispBox = document.getElementById('displayBox');
var showNum = document.getElementById('displayBox');

var opp = document.getElementById('operatorBox');
var operatorBox =  document.getElementById('operatorBox');

var btnBox =  document.getElementById('btnBox');


display();

createNumbers([0,1,2,3,4,5,6,7,8,9]);

createOp(['+','-','*','/']);

function display(){
  var displayBox = document.createElement('input');
  displayBox.innerHTML = this.id;
  dispBox.appendChild(displayBox);
}

function createNumbers(numbers){
  for (var i = 0 ; i < numbers.length; i ++){
    var btn = document.createElement('button');
    btn.id = numbers[i];
    btn.innerHTML = numbers[i];
    display.innerHTML = showNum;
    btn.addEventListener('click',function(){
      console.log(this.id);
    });
    btnBox.appendChild(btn);
  }
}

function createOp(calcOp){
  for (var i = 0; i < calcOp.length; i ++){
    var btn = document.createElement('button');
    btn.id = calcOp[i];
    btn.innerHTML = calcOp[i];
    btn.addEventListener('click',function(){
      console.log(this.id);
    });
    operatorBox.appendChild(btn);
  }
}

var numButsArray=[
  {}
];