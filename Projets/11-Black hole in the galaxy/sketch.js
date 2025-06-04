let containerElem;
let points = [];
let couleurs = [];

function setup() {
  containerElem = document.getElementById('preview-container');
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  const cnv = createCanvas(w, h);
  cnv.parent('preview-container');

  for (let i = 0; i < 50; i++) {
    points.push(createVector(random(width), random(height)));
    couleurs.push(color(random(100, 255), random(100, 255), random(100, 255)));
  }
  noStroke();
}

function draw() {
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  if (w !== width || h !== height) {
    resizeCanvas(w, h);
  }

  background(30);

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    let dir = createVector(mouseX, mouseY).sub(pt);
    dir.setMag(0.5);
    pt.add(dir);

    for (let g = 2; g >= 0.5; g -= 1.5) {
      fill(red(couleurs[i]), green(couleurs[i]), blue(couleurs[i]), 30 * g);
      ellipse(pt.x, pt.y, 10 + g * 8);
    }

    fill(couleurs[i]);
    ellipse(pt.x, pt.y, 20);
  }
}

function windowResized() {
  if (containerElem) {
    const w = containerElem.offsetWidth;
    const h = containerElem.offsetHeight;
    resizeCanvas(w, h);
  }
}