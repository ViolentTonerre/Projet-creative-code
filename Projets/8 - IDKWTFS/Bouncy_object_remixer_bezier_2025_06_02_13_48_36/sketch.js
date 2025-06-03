let bouncy = {
  size: 16,
  posX: 100,
  posY: 200,
  vitX: Math.random() * 8 - 4,
  vitY: Math.random() * 8 - 4,
  name: "A bouncy thing",

  bouger: function () {
    this.posX += this.vitX;
    this.posY += this.vitY;
  },

  rebondir: function () {
    if (this.posX + this.size > width || this.posX < 0) {
      this.vitX *= -1;
    }
    if (this.posY + this.size > height || this.posY < 0) {
      this.vitY *= -1;
    }
  },

  afficher: function () {
    stroke(0);
    triangle(this.posX, this.posY, this.size);
    noStroke();
    text(this.name, this.posX, this.posY - 4);
  },

  update: function () {
    this.bouger();
    this.rebondir();
    this.afficher();
  }
};

// Création des copies avec Object.create
let Blabla = Object.create(bouncy);
Blabla.name = "Bouncy McBounceface";
Blabla.vitX = Math.random() * 8 - 4;
Blabla.vitY = Math.random() * 8 - 4;

let Chaton = Object.create(bouncy);
Chaton.name = "Copy 2 of Bouncy déf bis";
Chaton.vitX = Math.random() * 8 - 4;
Chaton.vitY = Math.random() * 8 - 4;

let Delta = Object.create(bouncy);
Delta.name = "Copy 2 of Bouncy déf bis";
Delta.vitX = Math.random() * 8 - 4;
Delta.vitY = Math.random() * 8 - 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(120);
}

function draw() {
  background(0, 0, 0, 1);

  bouncy.update();
  Blabla.update();
  Chaton.update();
  Delta.update();
  

  // Dessin du triangle reliant les 3 objets
  noFill();
  stroke(255);
  bezier(
    bouncy.posX, bouncy.posY,
    Blabla.posX, Blabla.posY,
    Chaton.posX, Chaton.posY,
    Delta.posX, Delta.posY
  );
}