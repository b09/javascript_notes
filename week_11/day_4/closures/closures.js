//module pattern
const counter = (function() {
  let privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1


// =================================

var add = function(firstNumber){

  var innerFunction = function(secondNumber){
    return firstNumber + secondNumber;
  }

  return innerFunction;
}

var addFive = add(5);

addFive(2); // 7


// =================================


var car = function(gas){
  var currentGas = gas;
  var speed = 0;

  return {

    accelerate: function(){
      speed = speed + 10;
      currentGas--;
    },

    decelerate: function(){
      speed = speed - 10;
      currentGas--;
    },

    getGas: function(){
      return currentGas;
    }
  }
}

var newCar = car(200);

newCar.accelerate();
console.log(newCar.getGas()); // 199
console.log(newCar.currentGas); // undefined

//the let keyword eliminates some of the need for closures
