let randR = [];
let randG = [];
let randB = [];
let angle = [];
let strokes;
let rad = 25;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  for (let a = 0; a < 4; a++) {
    randR.push(Math.floor(random(255)));
    randG.push(Math.floor(random(255)));
    randB.push(Math.floor(random(255)));
  }
  strokes = new Array(64);

  for (let a = 0; a < 64; a++) {
    strokes[a] = new Array(3);
    strokes[a][0] = randR[Math.floor(random(0, 5))];
    strokes[a][1] = randG[Math.floor(random(0, 5))];
    strokes[a][2] = randB[Math.floor(random(0, 5))];
  }

  for (let a = 0; a < 64; a++) {
    angle.push((TAU / 360) * (-90 + 15 * a));
  }
  background(255);
}

function draw() {
  background(255);

  for (let a = 0; a < 8; a++)
    for (let j = 0; j < 8; j++) {
      strokeWeight(2);
      noFill();
      let num = a * 8 + j;
      stroke(strokes[num][0], strokes[num][1], strokes[num][2]);

      let gap = (width - rad * 16) / 9;
      let x = gap * (j + 1) + (2 * j + 1) * rad;
      let y = gap * (a + 1) + (2 * a + 1) * rad;

      ellipse(x, y, rad * 2);

      let pointX = cos(angle[num]) * rad + x;
      let pointY = sin(angle[num]) * rad + y;
      line(x, y, pointX, pointY);

      noStroke();
      fill(0);
      ellipse(pointX, pointY, 10);

      angle[num] += (TAU / 360) * 1;
    }
}
