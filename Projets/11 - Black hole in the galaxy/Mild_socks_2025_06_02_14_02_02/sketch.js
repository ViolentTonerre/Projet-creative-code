
let points = [];
let couleurs = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 50; i++) {
    points.push(createVector(random(width), random(height)));
    couleurs.push(color(random(100, 255), random(100, 255), random(100, 255)));
  }
}

function draw() {
  background(30);
  noStroke();

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    let dir = createVector(mouseX, mouseY).sub(pt);
    dir.setMag(0.5);
    pt.add(dir);

    // Glow effet avec plusieurs cercles transparents
    for (let g = 2; g >= 0.5; g--) {
      fill(red(couleurs[i]), green(couleurs[i]), blue(couleurs[i]), 30 * g);
      ellipse(pt.x, pt.y, 10 + g * 8); // couches extérieures floues
    }

    fill(couleurs[i]);
    ellipse(pt.x, pt.y, 20); // coeur de la planète
  }
}