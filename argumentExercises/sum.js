function sumArgs() {
  let args = Array.prototype.slice.call(arguments);
  let sum = 0;
  args.forEach((el) => {
    sum += el;
  });
  return sum;
}


console.log(sumArgs(1,2,3,4));
console.log(sumArgs(1,2,3,4,5));


function sumRest(...args) {
  let sum = 0;
  args.forEach((el) => {
    sum += el;
  });
  return sum;
}

console.log(sumRest(1,2,3,4));
console.log(sumRest(1,2,3,4,5));
