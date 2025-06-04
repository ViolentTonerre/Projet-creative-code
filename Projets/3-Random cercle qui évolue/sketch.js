let containerElem;
let taille = 1;
let sens = 1;

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
  background(100);
  stroke(255, 166, 25);
  noFill();
  circle(width / 2, height / 2, taille);
  taille += 15 * sens;
  if (taille > max(width, height) * 1.5 || taille < 1) {
    sens *= -1;
  }
}

function windowResized() {
  if (containerElem) {
    const w = containerElem.offsetWidth;
    const h = containerElem.offsetHeight;
    resizeCanvas(w, h);
  }
}