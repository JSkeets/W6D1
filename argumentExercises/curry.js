function curriedSum(numArgs) {
  debugger;
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      return numbers.reduce((function(a, b) {return a + b;} ));
    } else {
      return _curriedSum;
    }

  }
  return _curriedSum;
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

// The above works now. I removed the parentheses from out _curriedSum returns.

// myCurry using spread operator
Function.prototype.curry = function(numArgs){
  const args = [];
  let fn = this;

  function _curried(arg){
    console.log(arguments);
    args.push(arg);
    if (args.length === numArgs) {
      return fn(...args);
    } else {
      return _curried;
    }
  }
  return _curried;
};

function sumThree(num1, num2, num3) {
  console.log(arguments);
  return num1 + num2 + num3;
}
// invoke like so:
// console.log(sumThree.curry(3)(4)(20)(6));

// myCurry using apply
Function.prototype.curry1 = function(numArgs){
  debugger;
  const args = [];
  let fn = this;

  function _curried(arg){
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curried;
    }
  }
  return _curried;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
//invoke like so:
// console.log(sumThree.curry(3)(4)(20)(6));
