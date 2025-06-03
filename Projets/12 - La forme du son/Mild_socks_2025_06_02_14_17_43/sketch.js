let mic, fft;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
}

function draw() {
 
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(10, 0, 30), color(0, 20, 50), inter);
    stroke(c);
    line(0, y, width, y);
  }

  let spectrum = fft.analyze();
  noStroke();

  for (let i = 0; i < spectrum.length; i += 10) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);

    // Glow effet bleu
    for (let g = 3; g >= 1; g--) {
      fill(0, 150, 255, 20 * g);
      rect(x, height, width / spectrum.length * 10, h + g * 2);
    }

    fill(0, 150, 255);
    rect(x, height, width / spectrum.length * 10, h);
  }

  // Texte central
  fill(255);
  text("Galaxy Visualizer", width / 2, height / 2);
}
