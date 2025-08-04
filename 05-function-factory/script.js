// Starter examples (function output expectations are provided in README)

// Start coding here...
function makeMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = makeMultiplier(2);
const result1 = double(5); 

document.getElementById("multiplier_result").textContent = `Result of double(5): ${result1}`;

function makeGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHi = makeGreeter("Hi");
const result2 = sayHi("Mia"); 

document.getElementById("greeter_result").textContent = result2;