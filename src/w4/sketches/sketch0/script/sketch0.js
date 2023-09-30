// let mover;

// function setup() {
//   setCanvasContainer('canvas', 3, 2, true);
//   background(255);
//   mover = new Mover(width / 2, height / 2, 50);
// }

// function draw() {
//   background(255);
//   mover.update();
//   mover.checkEdges();
//   mover.display();
//   mover.displayVector();
// }

//모든 물체는 중력이 같은 게 아니라 중력 가속도가 같은 거다.

let mover;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  mover = new Mover(width / 2, height / 2, 50);
}
function draw() {
  background(255);

  mover.update();
  mover.checkEdges();
  mover.display();
  mover.displayVectors();
}
