let miroir;
let conteneur;

function preload() {
  // Aucun chargement supplémentaire nécessaire
}

function setup() {
  conteneur = document.getElementById('preview-container');
  const w = conteneur.offsetWidth;
  const h = conteneur.offsetHeight;
  const cnv = createCanvas(w, h);
  cnv.parent('preview-container');

  miroir = createGraphics(w, h);
  miroir.pixelDensity(1);
  background(30);
}

function draw() {
  const w = conteneur.offsetWidth;
  const h = conteneur.offsetHeight;
  if (w !== width || h !== height) {
    resizeCanvas(w, h);
    miroir = createGraphics(w, h);
    miroir.pixelDensity(1);
    background(30);
  }

  background(30);
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(
    "Clique, et déplace la souris et la magie opérera. WOW oui c'est bien ce que tu vois.",
    width / 2,
    30
  );

  if (mouseIsPressed) {
    miroir.strokeWeight(15);
    miroir.stroke(255, 200);
    miroir.line(mouseX, mouseY, pmouseX, pmouseY);
    let xMiroir = width - mouseX;
    let pxMiroir = width - pmouseX;
    miroir.line(xMiroir, mouseY, pxMiroir, pmouseY);
  }

  image(miroir, 0, 0);
}

function windowResized() {
  const w = conteneur.offsetWidth;
  const h = conteneur.offsetHeight;
  resizeCanvas(w, h);
  miroir = createGraphics(w, h);
  miroir.pixelDensity(1);
  background(30);
}