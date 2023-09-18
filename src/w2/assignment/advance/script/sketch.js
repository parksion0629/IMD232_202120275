function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background(255);
  noStroke();
}

function draw() {
  background(255);

  fill('red');
  strokeWeight(1);
  circle(mouseX, mouseY, width * 0.1);

  fill(255);
  rectMode(CORNER);
  colorMode(RGB);
  stroke(0);
  strokeWeight(1);

  fill(200);
  rect(40, 40, 200, 250);
  line(107, 180, 70, 130);
  line(176, 180, 210, 130);
  line(40, 220, 240, 220);
  fill(255);
  ellipse(140, 200, 80);
  fill(55);
  ellipse(140, 180, 5);
  ellipse(140, 200, 5);
  fill(255);
  ellipse(140, 140, 50);
  fill(55);
  ellipse(130, 140, 5);
  ellipse(150, 140, 5);
  fill(100);
  rect(40, 40, 200, 10);
  rect(40, 280, 200, 10);

  fill(200);
  rect(300, 0, 250, 50);
  fill(100);
  rect(300, 50, 250, 10);

  fill(200);
  rect(550, 150, 100, 210);
  line(550, 240, 650, 240);
  rect(555, 230, 10, 5);
  rect(555, 245, 10, 5);

  rect(100, 260, 10, 60);
  rect(100, 350, 70, 10);
  line(105, 320, 105, 350);

  fill(55);
  rect(200, 300, 300, 10);
  line(200, 310, 180, 360);
  line(180, 360, 520, 360);
  line(520, 360, 500, 310);

  fill(200);
  rect(400, 260, 30, 40, 5, 5, 0, 0);
  line(430, 265, 450, 265);
  line(450, 265, 450, 295);
  line(450, 295, 430, 295);
  line(430, 270, 445, 270);
  line(445, 270, 445, 290);
  line(445, 290, 430, 290);

  fill(200);
  rect(250, 295, 70, 5);
  line(320, 295, 340, 240);
  line(340, 240, 345, 242);
  line(345, 242, 326, 298);
  line(326, 298, 320, 295);

  fill(200);
  rect(0, 360, 1000, 300);
}
