// Projet 1 : Trace rebondissante qui révèle une image cachée
let ball, velocity, img, maskLayer;

function preload() {
  img = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png");
}

function setup() {
  createCanvas(400, 400);
  ball = createVector(random(width), random(height));
  velocity = p5.Vector.random2D().mult(3);

  maskLayer = createGraphics(width, height);
  maskLayer.background(125, 192, 121); // ça c'est du vert emeraude très beau
}

function draw() {
  // Affiche l'image en dessous
  image(img, 0, 0, width, height);

  // Affiche le masque par-dessus (effet de cache)
  maskLayer.erase();
  maskLayer.strokeWeight(10); // trace plus grosse
  maskLayer.stroke(255);
  maskLayer.point(ball.x, ball.y);
  maskLayer.noErase();

  image(maskLayer, 0, 0);

  ball.add(velocity);
  if (ball.x < 0 || ball.x > width) velocity.x *= -1;
  if (ball.y < 0 || ball.y > height) velocity.y *= -1;
}