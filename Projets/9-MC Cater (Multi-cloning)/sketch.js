let containerElem;
let mesBouncies = [];
let img;

function preload() {
  img = loadImage('329608.jpeg');
}

class Bouncy {
  constructor(size, posX, posY, vitX, vitY) {
    this.size = size;
    this.posX = posX;
    this.posY = posY;
    this.vitX = vitX;
    this.vitY = vitY;
  }

  bouger() {
    this.posX += this.vitX;
    this.posY += this.vitY;
  }

  rebondir() {
    if (this.posX + this.size > width || this.posX < 0) {
      this.vitX *= -1;
    }
    if (this.posY + this.size > height || this.posY < 0) {
      this.vitY *= -1;
    }
  }

  afficher() {
    image(img, this.posX, this.posY, this.size, this.size);
  }

  update() {
    this.bouger();
    this.rebondir();
    this.afficher();
  }
}

function setup() {
  containerElem = document.getElementById('preview-container');
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  const cnv = createCanvas(w, h);
  cnv.parent('preview-container');
  frameRate(120);

  for (let i = 0; i < 500; i++) {
    mesBouncies[i] = new Bouncy(
      32,
      random(0, width - 32),
      random(0, height - 32),
      random(-2, 2),
      random(-2, 2)
    );
  }
}

function draw() {
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  if (w !== width || h !== height) {
    resizeCanvas(w, h);
    for (let b of mesBouncies) {
      b.posX = constrain(b.posX, 0, width - b.size);
      b.posY = constrain(b.posY, 0, height - b.size);
    }
  }

  background(220);
  for (let b of mesBouncies) {
    b.update();
  }
}

function windowResized() {
  if (containerElem) {
    const w = containerElem.offsetWidth;
    const h = containerElem.offsetHeight;
    resizeCanvas(w, h);
  }
}