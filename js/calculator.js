function calculatorModule(){
  var module = {};
  var _memory = 0;
  var _total = 0;

 module.load = function(x){
  calctest(x);
  _total = x;
  return _total;
 };

 module.getTotal = function(){
  return _total;
 };

 module.add = function(x){
  calctest(x);
  _total = x + _total;
 };

 module.subtract = function(x){
 calctest(x);
  _total = _total - x;
 };

 module.multiply = function(x){
 calctest(x);
  _total = x * _total;
 };

 module.divide = function(x){
  calctest(x);
  _total = _total / x;
 };

 module.recallMemory = function(){
  return _memory;
 };

 module.saveMemory = function(){
  _memory = _total;
 };

 module.clearMemory = function(){
  _memory = 0;
 };

function calctest(x){
  if(typeof x !== 'number'){
    throw new Error('Wrong data ding dong!');
  }
}
   return module;
}
