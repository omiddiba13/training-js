function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
function circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const cirle = new circle(3);
console.log(circle);
// {}
