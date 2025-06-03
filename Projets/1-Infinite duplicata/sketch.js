let containerElem;
let taille = 10000;
let zoom = 1.0;

function setup() {
  // 1. On récupère le div #preview-container
  containerElem = document.getElementById('preview-container');

  // 2. On mesure sa largeur et sa hauteur
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;

  // 3. On crée un canvas p5.js aux mêmes dimensions et on l’attache au conteneur
  const cnv = createCanvas(w, h);
  cnv.parent('preview-container');

  // 4. (Optionnel) fond initial, pour éviter un flash noir au chargement
  background(240);
}

function draw() {
  // 1. Si l’iframe change de taille (rare mais possible), on redimensionne
  const w = containerElem.offsetWidth;
  const h = containerElem.offsetHeight;
  if (w !== width || h !== height) {
    resizeCanvas(w, h);
    // Si vous voulez réinitialiser le fond après redimensionnement :
    // background(240);
  }

  // 2. Votre animation : cercle + rectangle en spirale
  push();
  translate(200, 100);
  scale(zoom);
  circle(0, 0, taille);
  rect(0, 0, taille, taille);
  pop();

  // 3. Mise à jour de taille et zoom pour la boucle
  taille *= 0.9;
  zoom *= 1.01;
}

function windowResized() {
  // 4. Ajustement automatique si l’utilisateur redimensionne la fenêtre (iframe)
  if (containerElem) {
    const w = containerElem.offsetWidth;
    const h = containerElem.offsetHeight;
    resizeCanvas(w, h);
    // Si besoin de fond après resize :
    // background(240);
  }
}