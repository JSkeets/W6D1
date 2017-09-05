Function.prototype.myBind = function (context, ...bindTimeArgs) {
  debugger;
  return (...callTimeArgs) => {
    const allArgs = bindTimeArgs.concat(callTimeArgs);
    this.apply(context, allArgs);
  };
};







class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");


// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
//
markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
const breakfastTalks = markov.says.myBind(breakfast, "meow");

breakfastTalks("a tree");
