let containerElem;
let couleur;
let taille;

function setup() {
  containerElem = document.getElementById('preview-container');
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  const cnv = createCanvas(w, h);
  cnv.parent('preview-container');
  background(255);
  noStroke();
  couleur = createColorPicker('#85FF00');
  couleur.position(900, 10);
  couleur.style('height', '150px');
  couleur.style('width', '150px');
  couleur.style('border', '150px');
  taille = createSlider(0, 100, 0, 10);
  taille.position(900, 200);
  taille.size(100);
}

function draw() {
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  if (w !== width || h !== height) {
    resizeCanvas(w, h);
  }
  if (mouseIsPressed) {
    const chosenColor = couleur.color();
    fill(chosenColor);
    const tailleValue = taille.value();
    circle(mouseX, mouseY, tailleValue);
  }
}

function windowResized() {
  if (containerElem) {
    resizeCanvas(containerElem.offsetWidth, containerElem.offsetHeight);
  }
}

function keyPressed() {
  if (key === 's') {
    save('drawing.png');
  }
}