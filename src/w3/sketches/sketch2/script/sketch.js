let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  pos = createVactor(width / 2, height / 2);
  vel = createVactor(0, 0);
  acc = createVactor();
  console.log(pos);
  console.log(vel);
  // vel.add(acc);
  // pos.add(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  update();
  InfiniteEdge();
  display();
  // acc = p5.Vector.random2D();
  // acc.mult(0.5);
  // vel.limit(5);
  // pos.add(vel);
  // if (pos.x < 0) {
  //   vel.x *= -1;
  // } else if (pos.x > width) {
  //   vel.x *= -1;
  // }
  // if (pos.x - radius < 0 || pos.x + radius > width) {
  //   vel.x *= -1;
  // }
  // if (pos.y - radius < 0 || pos.y + radius > height) {
  //   vel.y *= -1;
  // }
  // if (pos.x < o) ellipse(pos.x, pos.y, 2 * radius);
}

function display() {
  Fill('red');
  ellipse(pos.x, pos.y, 2 * radius);
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(acc);
  vel.limit(5);
  pos.add(vel);
}
