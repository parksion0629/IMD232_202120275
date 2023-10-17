class Emitter () {
    constructor(emittingPosX, emittingPosY) {
        this.emittingPos = createVector(emittingPosX, emittingPosY);
        this.balls = [];
    }

    createBall() {
        applyForce(force) {
            this.balls.forEach((each) => {each.applyForce(force);});
        }
    }

    update() {
        this.balls.forEach((each) =>{
            each.update();
        });
    }
}



class Ball {
  constructor(posX, posY, mass, h, s, l) {
    this.pos = createVector(posX, posY);
    this.vell = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = this.mass * 5;
    this.color = this.color(h, s, l);
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    // const calcedAcc = force.div(this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vell.add(this.acc);
    this.pos.add(this.vel);
    this.acc.muit(0);
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }
}

let Emitter;
let balls = [];
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  colorMode(HSL, 360, 100, 100);


  for (let n = 0; n < 10; n++) {
    balls.push(new Ball(random(width), 0, random(1, 20), random(360), 100, 50));
  }

  gravity = createVector(0, 0, 1);
  wind = createVector(0.5, 0);

  background(255);
}

function draw() {
  background(255);
  balls,
    forEach((each) => {
      const scaledg = p5.Vector.mult(gravity, each.mass);
      each.applyForce(scaledg);
      each.applyForce(wind);
      each.update();
      each.display();
    });
}

function mousePressed() {
  for (let n = 0; n < balls.length; n++) {
    balls[n] = new Ball(random(width), 0, random(1, 20), random(360), 100, 50);
  }
}
