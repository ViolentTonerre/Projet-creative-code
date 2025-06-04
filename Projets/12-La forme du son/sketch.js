let containerElem;
let mic, fft;
let audioStarted = false;

function setup() {
  containerElem = document.getElementById('preview-container');
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  const cnv = createCanvas(w, h);
  cnv.parent('preview-container');

  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();

  // On configure l’FFT mais on ne démarre pas encore mic : on attend un geste utilisateur
  mic = new p5.AudioIn();
  fft = new p5.FFT();
}

function draw() {
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  if (w !== width || h !== height) {
    resizeCanvas(w, h);
  }

  background(30);

  if (!audioStarted) {
    fill(255);
    text("Cliquez pour activer le micro", width / 2, height / 2);
    return;
  }

  // Crée le dégradé de fond
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(10, 0, 30), color(0, 20, 50), inter);
    stroke(c);
    line(0, y, width, y);
  }

  let spectrum = fft.analyze();
  noStroke();

  // Affiche les barres selon le spectre
  for (let i = 0; i < spectrum.length; i += 10) {
    let x = map(i, 0, spectrum.length, 0, width);
    let hRect = -height + map(spectrum[i], 0, 255, height, 0);

    // Effet glow bleu
    for (let g = 3; g >= 1; g--) {
      fill(0, 150, 255, 20 * g);
      rect(x, height, (width / spectrum.length) * 10, hRect + g * 2);
    }

    fill(0, 150, 255);
    rect(x, height, (width / spectrum.length) * 10, hRect);
  }

  // Texte central
  fill(255);
  noStroke();
  text("Galaxy Visualizer", width / 2, height / 2);
}

function mousePressed() {
  if (!audioStarted) {
    userStartAudio().then(() => {
      mic.start();
      fft.setInput(mic);
      audioStarted = true;
    });
  }
}

function windowResized() {
  if (containerElem) {
    const w = containerElem.offsetWidth;
    const h = containerElem.offsetHeight;
    resizeCanvas(w, h);
  }
}