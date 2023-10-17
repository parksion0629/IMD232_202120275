function setup() {
  setCanvasContainer('canvasGoesHere', 2, 1, true);
  colorMode(HSL);
  prrticle = new Ball(width / 2, 0, 2, 0, 100, 50);
  emitter = new Element(width / 2, 0);
  g = createVector(0, 0.1);
  background('white');
}

function draw() {
  background(255);
  const scaledG = p5.Vector.milt(g, particle.mass);
  particle.applyForce(scaledG);
  particle.update();
  particle.display();

  emitter.createBall();
  emitter.applyGravity(g);
  emitter.update();
  emitter.display();

  console.log(emitter.balls.length);
}
