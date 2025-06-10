let étoiles = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    étoiles.push(new ÉtoileFilante());
  }
}

function draw() {
  background(0, 10);
  for (let étoile of étoiles) {
    étoile.miseAJour();
    étoile.afficher();
  }
}

class ÉtoileFilante {
  constructor() {
    this.réinitialiser();
  }
  
  réinitialiser() {
    this.pos = createVector(random(width), random(height));
    this.vit = p5.Vector.random2D().mult(random(2, 5));
    this.longueur = random(20, 50);
    this.couleur = color(255, 255, random(200));
  }
  
  miseAJour() {
    this.pos.add(this.vit);
    if (
      this.pos.x < 0 || this.pos.x > width ||
      this.pos.y < 0 || this.pos.y > height
    ) {
      this.réinitialiser();
    }
  }
  
  afficher() {
    stroke(this.couleur);
    strokeWeight(2);
    // traînée
    line(
      this.pos.x, this.pos.y,
      this.pos.x - this.vit.x * this.longueur / 10,
      this.pos.y - this.vit.y * this.longueur / 10
    );
  }
}