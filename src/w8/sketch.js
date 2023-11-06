let dom;
let htmlDom;
let canvasW = 600;
let vanvasH = 400;

function setup() {
  dom = select('#hereGoesMyP5sketch');
  //   console.log(dom);
  htmlDom = createCanvas(canvasW, canvasH);
  //   let canvas = createCanvas(600, 400);
  canvas.parent(dom);
  background('blak');
}

function draw() {}

function windowResized() {
  // console.log('p5.');
  if (htmlDom.clientWidth < canvasW) {
    console.log('리사이즈 됩니다.');
    resizeCanvas(
      htmlDom.clientWidth,
      (htmlDom.clientWidth * canvasH) / canvasW
    );
    background('black');
  } else if (width !== canvasW) {
    console.log('리사이즈 됩니다.');
    resizeCanvas(canvasW, canvasH);
    background('black');
  }
}
