let cols = 10;
let rows = 10;
let grid = [];

function setup() {
  createCanvas(400, 400);
  noStroke();

  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = color(255); // couleur initiale grise
    }
  }
}

function draw() {
  background(240, 192, 11);
  let w = width / cols;
  let h = height / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;
      if (dist(mouseX, mouseY, x + w / 2, y + h / 2) < w / 2) {
        grid[i][j] = color(random(255), random(255), random(255));
      }
      fill(grid[i][j]);
      rect(x, y, w, h);
    }
  }
}

