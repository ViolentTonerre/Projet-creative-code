let containerElem;
let pos;

function setup() {
  containerElem = document.getElementById('preview-container');
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  const cnv = createCanvas(w, h);
  cnv.parent('preview-container');
  pos = createVector(width / 2, height / 2);
  background(173, 232, 244);
}

function draw() {
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  if (w !== width || h !== height) {
    resizeCanvas(w, h);
  }
  fill(220, 20);
  rect(0, 0, width, height);
  fill(0, 180, 216);
  rect(pos.x, pos.y, 30, 30);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) pos.x -= 30;
  if (keyCode === RIGHT_ARROW) pos.x += 10;
  if (keyCode === UP_ARROW) pos.y -= 10;
  if (keyCode === DOWN_ARROW) pos.y += 30;
}

function windowResized() {
  if (containerElem) {
    const w = containerElem.offsetWidth;
    const h = containerElem.offsetHeight;
    resizeCanvas(w, h);
  }
}