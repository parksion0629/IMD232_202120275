// let x;
// let y;
let pos;
// let velocityX = 3;
// let velocityY = 5;
let vel = [3, 5];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  //   x = width / 2.0;
  //   y = height / 2.0;
  pos = [width / 2, height / 2];

  console.log('pos', pos);
  console.log('vel', vel);
}

function draw() {
  background('white');
  //   x += velocityX;
  //   y += velocityY;
  pos[0] += vel[0];
  pos[1] += vel[1];
  ellipse(pos[0], pos[1], 50);

  if (pos[0] < 0 || pos[0] > width) {
    vel[0] *= -1;
  }
  if (pos[1] < 0 || pos[1] > height) {
    vel[1] *= -1;
  }
}
