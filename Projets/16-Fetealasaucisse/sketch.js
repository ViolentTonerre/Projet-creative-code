let particules = [];
const PARTICULES_PAR_EXPLOSION = 20;
const palette = [
  [255, 255, 0],
  [255, 230, 0],
  [255, 200, 50],
  [255, 255, 100],
  [255, 215, 0]
];
let imgFond;
let containerElem;

function preload() {
  imgFond = loadImage('Saucisse.jpg');
}

function setup() {
  containerElem = document.getElementById('preview-container');
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  const cnv = createCanvas(w, h);
  cnv.parent('preview-container');
  initialiserParticules();
}

class Particule {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 3));
    this.taille = random(2, 7);
    this.vie = 100;
    const c = random(palette);
    this.r = c[0];
    this.g = c[1];
    this.b = c[2];
  }
  mettreAJour() {
    this.pos.add(this.vel);
    this.vie--;
  }
  dessiner() {
    noStroke();
    fill(this.r, this.g, this.b, (this.vie / 100) * 255);
    ellipse(this.pos.x, this.pos.y, this.taille);
  }
}

function initialiserParticules() {
  particules = [];
}

function draw() {
  // Si le conteneur a changé de taille, on ajuste le canvas
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  if (w !== width || h !== height) {
    resizeCanvas(w, h);
    initialiserParticules();
  }

  // Affiche l'image de fond
  image(imgFond, 0, 0, width, height);
  // Couche semi-transparente pour créer un léger effet de traînée
  fill(17, 17, 17, 25);
  rect(0, 0, width, height);

  if (random() < 0.02) {
    let xExplosion = random(width);
    let yExplosion = random(height);
    for (let i = 0; i < PARTICULES_PAR_EXPLOSION; i++) {
      particules.push(new Particule(xExplosion, yExplosion));
    }
  }

  for (let i = particules.length - 1; i >= 0; i--) {
    let p = particules[i];
    p.mettreAJour();
    p.dessiner();
    if (p.vie <= 0) {
      particules.splice(i, 1);
    }
  }
}

function windowResized() {
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  resizeCanvas(w, h);
  initialiserParticules();
}