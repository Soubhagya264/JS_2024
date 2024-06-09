// function expresseion
var b = function () {
  console.log("xyz");
}

// Named function expresseion
var k = function xyz() {
  console.log("hello");
};

// function statement
function name() {
  console.log("Soubhagya");
}

// first class functions
// Ability to be used like values 
var fun = function (param1) {
  param1()
}
fun(()=>{console.log("Soubhagya Nayak ...........")});

var b = function (param1, param2) {
  console.log(param1, param2);
  return function () {
    console.log("annonymus function");
  }
}

b(10,20)();



