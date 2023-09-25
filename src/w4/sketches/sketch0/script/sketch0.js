let ball;
let ball2;
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  ball = new Moverb(width / 3, 0, 50);
  ball2 = new Moverb((2 * width) / 3, 0, 10);
  gravity = createVector(0, 0.1);
  wind = createVector(-1, 0);
}

function draw() {
  let g = p5.Vector.mult(gravity, ball.mass);
  ball.applyForce(gravity);
  let g2 = p5.Vector.mult(gravity, ball2.mass);
  ball2.applyForce(gravity);
  if (mouseIsPressed) {
    ball.applyForce(wind);
    ball2.applyForce(wind);
  }
  ball.update();
  ball2.update();
  ball.edgeBounce();
  ball2.edgeBounce();
  background('salmon');
  Fill('white');
  ball.display();
  ball2.display();
}

//모든 물체는 중력이 같은 게 아니라 중력 가속도가 같은 거다.
