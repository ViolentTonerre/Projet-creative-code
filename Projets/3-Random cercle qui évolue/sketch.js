function setup() {
  createCanvas(600, 400);
}

let taille = 1;
let sens = 1; 

function draw() {
  background(100);
  stroke(255, 166, 25);
  noFill();
  circle(300, 200, taille);

  taille += 15 * sens;

  if (taille > 500 || taille < 1) {
    sens *= -1; 
  }
}