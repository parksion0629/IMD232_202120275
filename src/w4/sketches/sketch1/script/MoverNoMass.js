class MoverNoMass {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.1);
    this.radius = r;
  }
  //this는 이름을 지어주는 거

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  checkEdges() {
    if (this.pos.x < 0) {
      // let delta = this.pos.x - 0;
      // //0보다 얼마나 뚫고 갔어?
      // delta *= -1;
      // //뚫고간 거리에 -1을 곱헤 방향을 뒤집어라
      // this.pos.x = 0 + delta;
      // //x값은 0을 시작으로 delta값을 더한 위치가 된다. 기존 x위치 아님
      // //0을 기준으로 뒤집힌 거리를 더해준다.
      this.pos.x -= 0;
      this.pos.x *= -1;
      this.pos.x += 0;
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1) {
      this.pos.x -= width - 1;
      this.pos.x *= -1;
      this.pos.x += width - 1;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - 1) {
      this.pos.y -= height - 1;
      this.pos.y *= -1;
      this.pos.y += height - 1;
      this.vel.y *= -1;
    }
  }
  //공이 팅길 수 있도록 조치

  display() {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  displayVectors() {
    stroke('red');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    //vel을 빨간 선으로 나타냄
    stroke('blue');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.acc.x * 100,
      this.pos.y + this.acc.y * 100
    );
    //acc를 파란 선으로 나타냄
  }
}
