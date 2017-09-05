const MovingObject = require('./moving_object.js');
const Util = require('./util.js');


Util.inherits(Asteroid,MovingObject);

function Asteroid(pos = [20,20], vel, radius = 200, color = "blue") {
  // this.color = "blue";
  // this.radius = 20;
  vel = randomVec(1);
  MovingObject.call(this, pos, vel, radius, color);
}

//Return a randomly oriented vector with the given length.
function randomVec (length) {
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length);
}

// Scale the length of a vector by the given amount.
function scale (vec, m) {
  return [vec[0] * m, vec[1] * m];
}


const a = new Asteroid();
a.draw();
