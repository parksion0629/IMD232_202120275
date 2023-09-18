let posX;
let posY;
let posXAdd = 3;
let posYAdd = -2;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  posX = width / 2;
  posY = height / 2;
  // 화면 중앙에 놓는 방식
  // 셋업은 한 번 실행되면 다시 실행 X
  ellipse(posX, posY, 50);
  // 대신 드로우 에서 계산을 먼저 하게 되면 중앙에 있는 원을 못보게 됨,
  // 근데 중앙에 있는 걸 보고싶으면 셋업에서 일립스를 한 번 그려주면 됨
}

function draw() {
  background(255);
  // ellipse(mouseX, mouseY, 50);
  // posX += 5;
  // posY += 3;
  // 계산은 그리기 전에 넣어주는 게 좋다
  posX += posXAdd;
  posY += posYAdd;
  ellipse(posX, posY, 50);
  // 드로우는 계속 반복 실해이여서 뭔가 바뀌는 변수는 여기에 둬야 함
  // posX++: 근데 얘는 1씩만 움직이는 용도임
  // posX = posX + 1;
  // posX += 1;
}
