let angle = 0;
let conteneur;

function setup() {
  conteneur = document.getElementById('preview-container');
  const w = conteneur.offsetWidth;
  const h = conteneur.offsetHeight;
  const cnv = createCanvas(w, h);
  cnv.parent('preview-container');
  angleMode(RADIANS);
}

function draw() {
  // Ajuster la taille si le conteneur change
  const w = conteneur.offsetWidth;
  const h = conteneur.offsetHeight;
  if (w !== width || h !== height) {
    resizeCanvas(w, h);
  }

  background(120);

  // Plus mouseX est à droite, plus la rotation est rapide
  let vitesse = map(mouseX, 0, width, 0.005, 0.19);
  angle += vitesse;

  push();
  translate(width / 2, height / 2);
  rotate(angle);

  // Dessiner la jante de la roue
  stroke(92, 230, 92);
  strokeWeight(12);
  noFill();
  let rayon = 100;
  circle(0, 0, rayon * 2);

  // Dessiner les 8 rayons
  stroke(255);
  strokeWeight(4);
  for (let i = 0; i < 8; i++) {
    let theta = TWO_PI * (i / 8);
    let x = cos(theta) * rayon;
    let y = sin(theta) * rayon;
    line(0, 0, x, y);
  }
  pop();
}

function windowResized() {
  const w = conteneur.offsetWidth;
  const h = conteneur.offsetHeight;
  resizeCanvas(w, h);
}