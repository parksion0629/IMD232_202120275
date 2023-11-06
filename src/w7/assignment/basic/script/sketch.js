let traffic;
//traffic 이라는 변수를 선언
let infiniteOffset = 80;
//infiniteOffset 이라는 변수를 선언하고, 값은 80이다.

function setup() {
  //스케치를 초기화하고, 시작할 때 필요한 설정을 수행
  setCanvasContainer('canvas', 3, 2, true);
  // 캔버스 불러오기, 캔버스의 비율을 3:2로 세팅, 창의 크기에 따라 캔버스 크기를 반응할 것이라는 표시
  colorMode(HSL, 360, 100, 100, 100);
  //컬러모드 설정: 각 구성 요소의 최대값 / 색상:360 / 채도:100 / 명도:100
  background('white');
  //캠버스 배경색 = 하얀색
  traffic = new Traffic();
  //Traffic라는 클래스의 인스턴스를 생성하고 traffic라는 변수에 집어 넣음
  for (let n = 0; n < 10; n++) {
    //반복 작업을 수행할 때 사용하는 for 구문이다. 'n' 변수를 0으로 초기화하고, n이 10보다 작은 동안 반복 실행한다. 1 반복마다 'n'을 1씩 증가한다.
    traffic.addVehicle(random(width), random(height));
    //랜덤으로 위치를 지정하는 코드.
  }
}

function draw() {
  //화면에 그림을 그리고 반응하는 코드
  background('white');
  //배경색을 흰색으로 설정
  traffic.run();
  //traffic이라는 클래스를 실행
}

function mouseDragged() {
  //마우스를 드래그하면 반응하는 함수
  traffic.addVehicle(mouseX, mouseY);
  //traffic이라는 클래스의 addvehicle를 넣어서 작동함. addvehicle의 좌표는 마우스 커서의 x,y 다.
}
