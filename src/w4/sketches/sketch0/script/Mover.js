class Mover {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.1);
    this.radius = r;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  checkEdges() {
    if (this.pos.x < 0) {
      //   // 0보다 얼마나 뚫고 갔는가?
      //   let delta = this.pos.x - 0;
      //   // 그 뚫고간 거리에 -1을 곱해 방향을 뒤집고,
      //   delta *= -1;
      //   // 0을 기준으로 뒤집힌 거리를 더해준다.
      //   this.pos.x = 0 + delta;
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
    stroke('blue');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.acc.x * 100,
      this.pos.y + this.acc.y * 100
    );
  }
}

// class Mover {
//   constructor(x, y, r) {
//     this.pos = createVector(x, y);
//     this.vel = createVector(0, 0);
//     this.acc = createVector(0, 0.1);
//     this.radius = r;
//     // this.mass = radius ** (1 / 2);
//   }

//   // applyForce(force) {
//   //   // force.div(this.mass);
//   //   let divedForce = p5.Vector.div(force, this.mass);
//   //   this.acc.add(divedForce);
//   // }

//   update() {
//     this.vel.add(this.acc);
//     this.pos.add(this.vel);
//     // this.acc.muit(0);
//     //가속도를 초기화 해둔자는 뜻
//   }

//   // edgeBounce() {
//   //   if (this.pos.x < 0 + this.radius) {
//   //     let delta = this.pos.x - (0 + this.radius);
//   //     this.pos.x += -2 * delta;
//   //     this.vel.x *= -1;
//   //   } else if (this.pos.x > width - 1 - this.radius) {
//   //     let delta = this.pos.x - (width - 1 - this.radius);
//   //     this.pos.x += -2 * delta;
//   //     this.vel.x *= -1;
//   //   }
//   //   if (this.pos.y > width - 1 - this.radius) {
//   //     let delta = this.pos.y - (height - 1 - this.radius);
//   //     this.pos.y += -2 * delta;
//   //     this.vel.y *= -1;
//   //   }
//   // }

//   checkEdges() {
//     if (this.pos.x < 0) {
//       // //벽에 부딪혔을 때 0보다 얼마난 뚫고 갔는가?
//       // let delta = this.pos.x - 0;
//       // //뚫고 간 거리에 -1을 곱해 방향을 뒤집고,
//       // delta *= -1;
//       // //그리고 0을 기준으로 뒤집힌 거리를 더해준다.
//       // this.pos.x = 0 + delta;
//       // this.vel.x *= 1;
//       this.pos.x -= 0;
//       this.pos.x *= -1;
//       this.pos.x += 0;
//       this.vel.x *= -1;
//     } else if (this.pos.x > width - 1) {
//       this.pos.x -= width - 1;
//       this.pos.x *= -1;
//       this.pos.x += width - 1;
//       this.vel.x *= -1;
//     }
//     if (this.pos.y > height - 1) {
//       this.pos.y -= height - 1;
//       this.pos.y *= -1;
//       this.pos.y += height - 1;
//       this.vel.y *= -1;
//     }
//   }

//   display() {
//     noStroke();
//     fill(0);
//     ellipse(this.pos.x, this.pos.y, 2 * this.radius);
//   }

//   displayVector() {
//     stroke('red');
//     line(
//       this.pos.x,
//       this.pos.y,
//       this.pos.x + this.vell.x * 10,
//       this.pos.y + this.vell.y * 10
//     );

//     stroke('blue');
//     line(
//       this.pos.x,
//       this.pos.y,
//       this.pos.x + this.acc.x * 100,
//       this.pos.y + this.acc.y * 100
//     );
//   }
// }
