class Bouncy {
  
  constructor (size, posX, posY, vitX,vitY){
    this.size=size;
     this.posX=posX;
     this.posY=posY;
    this.vitX=vitX;
    this.vitY=vitY;
    }// fin constructor
  

  bouger() {
    this.posX += this.vitX;
    this.posY += this.vitY;
  }

  rebondir () {
    if (this.posX + this.size > width || this.posX < 0) {
      this.vitX *= -1;
    }
    if (this.posY + this.size > height || this.posY < 0) {
      this.vitY *= -1;
    }
    
  }

  afficher() {
    stroke(0);
    square(this.posX, this.posY, this.size);
    noStroke();
  }

  update() {
    this.bouger();
    this.rebondir();
    this.afficher();
  }
}// bouncy class

/*class bouncy finit*/


let mesBouncies = [];

mesBouncies[0] = new Bouncy(16,100,200,1.2,1.7);
mesBouncies[1] = new Bouncy(16,100,200,-1.2,1.2);
mesBouncies[2] = new Bouncy(16,100,200,1.2,1.5);


let machin = new Bouncy(16,100,200,1.2,1.7);
let skibidi = new Bouncy(16,100,200,4.2,1.7);
let jacky = new Bouncy(16,100,200,-1.2,1.7);

function setup() {
  createCanvas(400, 400);
  frameRate(120);
  
  for( let i = 0; i < 500; i++){
      console.log(i);
      mesBouncies[i] = new Bouncy(16, 200, 200, random(-2,2), random(-2,2));
                                  
    }
}

function draw() {
  background(220);
  
   for( let i = 0; i < mesBouncies.length; i++){
      mesBouncies[i].update();
   }
  
  
mesBouncies[0].update();
mesBouncies[1].update();
mesBouncies[2].update();
  
  
}