let containerElem;
let taille = 10000;
let zoom = 1.0;

function setup() {

  containerElem = document.getElementById('preview-container');

  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;

  const cnv = createCanvas(w, h);
  cnv.parent('preview-container');


  background(240);
}

function draw() {

  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  if (w !== width || h !== height) {
    resizeCanvas(w, h);

  }


  push();
  translate(200, 100);
  scale(zoom);
  circle(0, 0, taille);
  rect(0, 0, taille, taille);
  pop();


  taille *= 0.9;
  zoom *= 1.01;
}

function windowResized() {

  if (containerElem) {
    const w = containerElem.offsetWidth;
    const h = containerElem.offsetHeight;
    resizeCanvas(w, h);

  }
}