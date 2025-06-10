let stars = [];
let numStars = 500;
let Chattropmignon;
let containerElem;

function preload() {
  Chattropmignon = loadImage('Chatdedos.png');
}

function setup() {
  containerElem = document.getElementById('preview-container');
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  const cnv = createCanvas(w, h);
  cnv.parent('preview-container');
  etoiles();
}

function draw() {
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  if (w !== width || h !== height) {
    resizeCanvas(w, h);
    etoiles();
  }

  background(0);
  translate(width / 2, height / 2);

  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    star.z -= 2;
    if (star.z <= 0) {
      star.z = width;
    }
    let sx = (star.x / star.z) * width;
    let sy = (star.y / star.z) * height;
    let r = map(star.z, 0, width, 12, 0);
    fill(36, 68, 92);
    noStroke();
    ellipse(sx, sy, r, r);
  }

  // Chat trop mignon
  push();
  resetMatrix();
  imageMode(CENTER);
  let catX = width / 3;
  let catY = height - (Chattropmignon.height / 9);
  let catWidth = Chattropmignon.width;
  let catHeight = Chattropmignon.height;
  image(Chattropmignon, catX, catY, catWidth, catHeight);
  pop();
}

function etoiles() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: random(-width / 2, width / 2),
      y: random(-height / 2, height / 2),
      z: random(width)
    });
  }
}

function windowResized() {
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  resizeCanvas(w, h);
  etoiles();
}