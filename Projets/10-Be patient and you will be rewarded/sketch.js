let containerElem;
let ball, velocity, img, maskLayer;

function preload() {
  img = loadImage("329608.jpeg");
}

function setup() {
  containerElem = document.getElementById('preview-container');
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  const cnv = createCanvas(w, h);
  cnv.parent('preview-container');

  ball = createVector(random(width), random(height));
  velocity = p5.Vector.random2D().mult(3);

  maskLayer = createGraphics(width, height);
  maskLayer.background(125, 192, 121);
}

function draw() {
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  if (w !== width || h !== height) {
    resizeCanvas(w, h);
    maskLayer.resizeCanvas(w, h);
    maskLayer.background(125, 192, 121);
  }

  image(img, 0, 0, width, height);

  maskLayer.erase();
  maskLayer.strokeWeight(10);
  maskLayer.stroke(255);
  maskLayer.point(ball.x, ball.y);
  maskLayer.noErase();

  image(maskLayer, 0, 0);

  ball.add(velocity);
  if (ball.x < 0 || ball.x > width) velocity.x *= -1;
  if (ball.y < 0 || ball.y > height) velocity.y *= -1;
}

function windowResized() {
  if (containerElem) {
    const w = containerElem.offsetWidth;
    const h = containerElem.offsetHeight;
    resizeCanvas(w, h);
    maskLayer.resizeCanvas(w, h);
    maskLayer.background(125, 192, 121);
  }
}