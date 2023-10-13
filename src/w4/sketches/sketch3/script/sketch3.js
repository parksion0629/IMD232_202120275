let moverA;
let moverB;
let wind;
let gravity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new MoverWithMass(width / 3, height / 2, 10);
  moverB = new MoverWithMass((2 * width) / 3, height / 2, 1);
  gravity = createVector(0, 0.1);
  wind = createVector(0.2, 0);
}
function draw() {
  background(255);

  moverA.applyForce(gravity);
  //위에서 누르는 중력
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyForce(wind);
    //원래는 항시 왼쪽에서 불어오는 바람이지만
    //if 안으로 들어오면서 마우스를 눌렀을 때만 왼쪽으로 부는 바람이 됨
    //isMouseInsideCanvas()는 원래 캠버스 빡에서 눌러도 바람이 불던걸 캠버스 안에서 눌러야만 불게 만들어주는 시스템임
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVectors();

  moverB.applyForce(gravity);
  //위에서 누르는 중력
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverB.applyForce(wind);
    //원래는 항시 왼쪽에서 불어오는 바람이지만
    //if 안으로 들어오면서 마우스를 눌렀을 때만 왼쪽으로 부는 바람이 됨
    //isMouseInsideCanvas()는 원래 캠버스 빡에서 눌러도 바람이 불던걸 캠버스 안에서 눌러야만 불게 만들어주는 시스템임
  }
  moverB.update();
  moverB.checkEdges();
  moverB.display();
  moverB.displayVectors();
}
