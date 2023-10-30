let pos;
let vel;
let acc;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector(0, 0);
}

function draw() {
  background(220);
  let randomAcc = p5.Vector.random2D();
  randomAcc.mult(0.2);

  // 현재 가속도에 더하기
  acc.add(randomAcc);

  // 현재 속도에 가속도 더하기
  vel.add(acc);

  // 속도 벡터 크기 제한
  vel.limit(5); // 속도 상한선

  // 위치 벡터에 속도 벡터 더하기
  pos.add(vel);

  // 화면 밖으로 나가지 않도록 위치 조정
  if (pos.x > width) {
    pos.x = 0;
  } else if (pos.x < 0) {
    pos.x = width;
  }
  if (pos.y > height) {
    pos.y = 0;
  } else if (pos.y < 0) {
    pos.y = height;
  }

  // 원 그리기
  noFill();
  stroke(0);
  ellipse(pos.x, pos.y, 50, 50);

  // 중심에서 마우스로 향하는 벡터 그리기
  let centerToMouse = createVector(mouseX - pos.x, mouseY - pos.y);
  centerToMouse.mult(10); // 벡터 확대
  stroke(255, 0, 0);
  line(pos.x, pos.y, pos.x + centerToMouse.x, pos.y + centerToMouse.y);

  // 가속도 벡터 그리기
  acc.mult(100); // 벡터 확대
  stroke(0, 0, 255);
  line(pos.x, pos.y, pos.x + acc.x, pos.y + acc.y);

  // 속도 벡터 그리기
  vel.mult(10); // 벡터 확대
  stroke(0, 255, 0);
  line(pos.x, pos.y, pos.x + vel.x, pos.y + vel.y);
}
