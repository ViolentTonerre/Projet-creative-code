let containerElem;
let mots = ["Hello", "chaton", "pixels", "PGM", "machin"];
let bonusSon;
let i = 0;

function preload() {
  soundFormats('mp3');
  bonusSon = loadSound('Surprise.mp3');
}

function setup() {
  containerElem = document.getElementById('preview-container');
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  const cnv = createCanvas(w, h);
  cnv.parent('preview-container');
  background(220);
  textAlign(LEFT, TOP);
  fill(50);
}

function draw() {
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  if (w !== width || h !== height) {
    resizeCanvas(w, h);
    background(220);
  }
}

function mousePressed() {
  let size = random(10, 80);
  textSize(size);
  text(mots[i], mouseX, mouseY);
  i++;
  if (i >= mots.length) {
    i = 0;
  }
  if (random(1) < 0.05) {
    if (bonusSon.isPlaying()) {
      bonusSon.stop();
    }
    bonusSon.play();
  }
}

function windowResized() {
  if (containerElem) {
    const w = containerElem.offsetWidth;
    const h = containerElem.offsetHeight;
    resizeCanvas(w, h);
    background(220);
  }
}