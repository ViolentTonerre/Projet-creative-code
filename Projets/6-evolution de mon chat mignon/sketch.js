let containerElem;
let myImage;
let x = 0;
let y = 0;
let dragging = false;
let offsetX, offsetY;

function preload() {
  myImage = loadImage('Laya.jpg');
}

function setup() {
  containerElem = document.getElementById('preview-container');
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  const cnv = createCanvas(w, h);
  cnv.parent('preview-container');
}

function draw() {
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  if (w !== width || h !== height) {
    resizeCanvas(w, h);
  }

  background(255);
  image(myImage, x, y);

  x++;
  if (x > width) {
    x = 0;
    y += 50;
  }
  x = constrain(x, 0, width - myImage.width);
  y = constrain(y, 0, height - myImage.height);

  myImage.loadPixels();
  let num = Math.floor(random(myImage.pixels.length));
  myImage.pixels[num] = Math.floor(random(255));
  myImage.updatePixels();
}

function mousePressed() {
  if (
    mouseX > x && mouseX < x + myImage.width &&
    mouseY > y && mouseY < y + myImage.height
  ) {
    dragging = true;
    offsetX = mouseX - x;
    offsetY = mouseY - y;
  }
}

function mouseDragged() {
  if (dragging) {
    x = mouseX - offsetX;
    y = mouseY - offsetY;
  }
}

function mouseReleased() {
  dragging = false;
}

function windowResized() {
  if (containerElem) {
    const w = containerElem.offsetWidth;
    const h = containerElem.offsetHeight;
    resizeCanvas(w, h);
  }
}