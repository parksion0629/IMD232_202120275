let bodies = [];
let bodyNum = 30;
let G = 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  reset();
  background(255);
}

function draw() {
  background(255);

  for (let a = 0; a < bodyNum; a++) {
    for (let j = 0; j < bodyNum; j++)
      if (a !== j) bodies[j].applyForce(bodies[a].attract(bodies[j]));

    bodies[a].update();
    bodies[a].display();
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) reset();
}

function reset() {
  for (let a = 0; a < bodyNum; a++)
    bodies[a] = new Body(random(width), random(height), random(16, 100));
}
