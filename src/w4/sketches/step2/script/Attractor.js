class Attractor {
  constructor(x, y, nass) {
    this.pos = createVector(x, y);
    this.mass = mass;
  }

  attractor(mover) {
    let dirVector = p5.Vector.sub(this.pos, mover.pos);
    let distance = dirVector.mag();
    let strength = (this.mass * mover.mass) / distance ** 2;
    return dirVector.setMag(strength);
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 100);
  }
}
