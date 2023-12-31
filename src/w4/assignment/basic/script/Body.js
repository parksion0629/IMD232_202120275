class Body {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = this.mass ** (1 / 2) * 4;
  }

  attract(body) {
    const force = p5.Vector.sub(this.pos, body.pos);
    let distance = constrain(force.mag(), 10, 50);
    let strength = (G * (this.mass * body.mass)) / distance ** 2.5;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  display() {
    noStroke();
    strokeWeight(0.5);
    fill(10, 127);
    circle(this.pos.x, this.pos.y, this.rad * 2);
  }
}
