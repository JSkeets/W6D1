
// Function.prototype.inherits = function(SuperClass)  {
//   function Surrogate() {}
//   Surrogate.prototype = SuperClass.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

Function.prototype.inherits2 = function (SuperClass) {
  this.prototype = Object.create(SuperClass.prototype);
  this.prototype.constructor = this;
}


function MovingObject(name, speed) {
  this.name = name;
  this.speed = speed;
}

function Ship(name, speed, type) {
  MovingObject.call(this, name,speed);
  this.type = type;
}

Ship.inherits2(MovingObject);

MovingObject.prototype.crash = function () {
  return `${this.name} crashed!`;
};

const movingobj = new MovingObject("obj1", 10);
const ship = new Ship("TheShip",25, "battleship");

console.log(ship.type);
console.log(ship.name);
console.log(ship.speed);
console.log(ship.crash());
console.log(movingobj.crash());
