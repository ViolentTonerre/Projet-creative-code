let containerElem;

let bouncy = {
    size: 16,
    posX: 10,
    posY: 15,
    vitX: 1.2,
    vitY: 0.9,
    name: "A bouncy thing",

    bouger: function () {
        this.posX += this.vitX;
        this.posY += this.vitY;
    },

    rebondir: function () {
        if (this.posX + this.size > width || this.posX < 0) {
            this.vitX *= -1;
            this.changerNom();
        }
        if (this.posY + this.size > height || this.posY < 0) {
            this.vitY *= -1;
            this.changerNom();
        }
    },

    afficher: function () {
        stroke(255, 0, 255);
        strokeWeight(2);
        square(this.posX, this.posY, this.size);
        noStroke();
        text(this.name, this.posX, this.posY - 4);
    },

    changerNom: function () {
        let noms = ["Wow", "Prout Prout", "Adrien", "Miaou", "Waouf", "Caca"];
        this.name = random(noms);
    },

    update: function () {
        this.bouger();
        this.rebondir();
        this.afficher();
    }
};

let bBouncy = Object.create(bouncy);
bBouncy.name = "Bouncy McBounceface";
bBouncy.vitX = 1.5;

let copyBouncy = Object.create(bouncy);
copyBouncy.name = "Copy of bouncy";
copyBouncy.vitY = 1.5;

function setup() {
    containerElem = document.getElementById('preview-container');
    const w = containerElem.offsetWidth;
    const h = containerElem.offsetHeight;
    const cnv = createCanvas(w, h);
    cnv.parent('preview-container');
    frameRate(120);
    textSize(12);
}

function draw() {
    const w = containerElem.offsetWidth;
    const h = containerElem.offsetHeight;
    if (w !== width || h !== height) {
        resizeCanvas(w, h);
    }

    background(220);
    bouncy.update();
    bBouncy.update();
    copyBouncy.update();
}

function windowResized() {
    if (containerElem) {
        const w = containerElem.offsetWidth;
        const h = containerElem.offsetHeight;
        resizeCanvas(w, h);
    }
}