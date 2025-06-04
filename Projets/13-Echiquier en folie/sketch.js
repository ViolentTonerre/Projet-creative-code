let containerElem;
let cols = 10;
let rows = 10;
let grid = [];

function setup() {
  containerElem = document.getElementById('preview-container');
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  const cnv = createCanvas(w, h);
  cnv.parent('preview-container');
  noStroke();

  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = color(255);
    }
  }
}

function draw() {
  const wContainer = containerElem.offsetWidth;
  const hContainer = containerElem.offsetHeight;
  if (wContainer !== width || hContainer !== height) {
    resizeCanvas(wContainer, hContainer);
  }

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

function windowResized() {
  if (containerElem) {
    const wContainer = containerElem.offsetWidth;
    const hContainer = containerElem.offsetHeight;
    resizeCanvas(wContainer, hContainer);
  }
}