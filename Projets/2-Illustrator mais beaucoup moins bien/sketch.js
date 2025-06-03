let couleur;
let taille;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let R = random(255);
  let V = random(255);
  let B = random(255);
  background(255);
  noStroke(); // Supprime le contour des cercles
    couleur = createColorPicker('#85FF00');
  couleur.position(10, 10);
  couleur.style("height", "150px");
  couleur.style("width", "150px");
  couleur.style("border", "150px");
  
  //createSlider(min, max, [value], [step])
  
  taille = createSlider(0, 100, 0, 10)
  taille.position(10, 200);
  taille.size(100);

  
}

function draw() {
  if (mouseIsPressed) {
    let R = random(255);
    let V = random(255);
    let B = random(255);
    fill(R, V, B);
    
    let chosenColor = couleur.color();
    fill(chosenColor);
    
    let tailleValue = taille.value();

    circle(mouseX, mouseY, tailleValue);
  }
}

function keyPressed() {
  if (key == "s") {
    save("drawing.png");
  }
}