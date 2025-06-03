let boxSize = 100;

let positionX = 33;
let vitesseX = 2;

let positionY = 234;
let vitesseY = 5;

let r = Math.random() * 120;
let v = Math.random() * 120;
let b = Math.random() * 120;

let dvdLogo;

function preload() {
  dvdLogo = loadImage("DVD-logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  dvdLogo.resize(800,480);
}

function draw() {
  background(r, v, b);

  image(dvdLogo, positionX, positionY, boxSize, boxSize);
  positionX += vitesseX;
  positionY += vitesseY;

  if (positionX + boxSize > width || positionX < 0) {
    vitesseX *= -1;
    changeColor();
  }

  if (positionY + boxSize > height || positionY < 0) {
    vitesseY *= -1;
    changeColor();
  }
}

function changeColor() {
  r = Math.random() * 120;
  v = Math.random() * 120;
  b = Math.random() * 120;
}