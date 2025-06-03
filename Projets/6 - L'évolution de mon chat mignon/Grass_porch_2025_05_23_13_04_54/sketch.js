let myImage;
function preload(){
  myImage = loadImage("Laya.jpg");
}

function setup() {
  createCanvas(windowWidth, 800);
}

let x = 0;
let y = 0;
function draw() {
  image(myImage, x, y);
  
  x++;
  
  if(x > windowWidth){
    x = 0;
    y += 50;
  }
    // pour que l'image ne sorte pas du cadre
  x = constrain(x, 0, width - myImage.width);
  y = constrain(y, 0, height - myImage.height);
  
  /*
    charger les pixels
    chercher un donnée RGBA de pixel aléatoire
      (chiffre rond)
    modifier la valeur à un valeur aléatoire
    ré-enregistrer les pixels
  */
  myImage.loadPixels();
  let num = random(myImage.pixels.length);
  num = Math.floor(num);
  myImage.pixels[num] = Math.floor(random(255));
  myImage.updatePixels();
  
  
}

function mousePressed() {
  // Vérifie si la souris est dans les limites de l'image
  if (
    mouseX > x && mouseX < x + myImage.width &&
    mouseY > y && mouseY < y + myImage.height
  ) {
    dragging = true;
    offsetX = mouseX - x;
    offsetY = mouseY - y;
  }
}

function mouseDragged() {
  if (dragging) {
    x = mouseX - offsetX;
    y = mouseY - offsetY;
  }
}

function mouseReleased() {
  dragging = false;
}
 