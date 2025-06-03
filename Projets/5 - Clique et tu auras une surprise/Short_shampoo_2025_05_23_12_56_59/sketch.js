function setup() {
  createCanvas(800, 800);
  background(220);
}

function draw() {
}

let mots = ["Hello", "chaton", "Uluberlu", "PGM", "machin"];
let size;
let surprise;

function preload() {
  soundFormats('mp3');
  bonusSon = loadSound("Surprise.mp3");}

mots[2] = "pixels";

let i = 0; //i pour index

function mousePressed() {
  let size = random(10,80);
  textSize(size);
  text(mots[i], mouseX, mouseY);
  i++;
  if(i >= mots.length){ i = 0;
     
     }
if (random(1) < 0.05) {
    if (bonusSon.isPlaying()) {
      bonusSon.stop();
    }
    bonusSon.play();
  }
}

console.log(mots)



