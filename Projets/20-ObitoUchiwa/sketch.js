function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noFill();
}

function draw() {
  background(0, 10);        // fondu lent pour laisser une traînée
  translate(width/2, height/2);

  let branches = 8;         // nombre de segments dans le kaleïdoscope
  let radiusStep = 15;      // espacement des lignes radiales
  let hueBase = frameCount % 360;

  colorMode(HSB, 360, 100, 100, 100);
  strokeWeight(2);

  for (let b = 0; b < branches; b++) {
    push();
    rotate((360 / branches) * b + frameCount * 0.2);
    stroke((hueBase + b * 20) % 360, 80, 100, 80);

    beginShape();
    for (let r = radiusStep; r < 200; r += radiusStep) {
      let a = r + frameCount; 
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
    }
    endShape();
    pop();
  }
}