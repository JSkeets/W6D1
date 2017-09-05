function MovingObject(options) {
  this.pos = options["pos"];
  this.vel = options["vel"];
  this.radius = options["radius"];
  this.color = options["color"];
}

const canvasEl = document.getElementById("myCanvas");
canvasEl.width = 500;
canvasEl.height = 500;
const ctx = canvasEl.getContext("2d");

MovingObject.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function () {
  let x = this.pos[0] + this.vel[0];
  let y = this.pos[1] + this.vel[1];
  this.pos = [x, y];
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  this.draw();
};

const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
);
mo.draw();
mo.move();


module.exports = MovingObject;
