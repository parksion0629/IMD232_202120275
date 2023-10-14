function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  line(200, 0, 200, height);
  line(0, 100, width, 100);

  push();
  translate(width / 2, height / 2);
  rotate((TAU / 360) * 25);
  noStroke();
  fill('salmon');
  rect(0, 0, 50);
  stroke('salmon');
  line(200, 0, 200, height);
  line(0, 100, width, 100);
  pop();

  //   rotate((TAU / 360) * -25);
  //   translate(-width / 2, -height / 2);

  translate(200, 100);
  rotate((TAU / 360) * -15);
  noStroke();
  fill('slateblue');
  rect(0, 0, 50);
}

function draw() {}

//푸시 팝 안에 있는 것들은 찹이 되는 순간 리셋됨
//트랜슬레이트와 로테이트 순서 중요함
