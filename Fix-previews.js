const fs = require('fs');
const path = require('path');

const baseDir = '.'; // Ton dossier principal (à adapter si besoin)

for (let i = 1; i <= 20; i++) {
    const folder = fs.readdirSync(baseDir).find(name => name.startsWith(`${i} -`) || name.startsWith(`${i}-`));
    if (!folder) {
        console.log(`Projet ${i} non trouvé`);
        continue;
    }

    const sketchPath = path.join(baseDir, folder, 'sketch.js');
    const indexPath = path.join(baseDir, folder, 'index.html');

    // --- Étape 1 : Modifier sketch.js ---
    if (fs.existsSync(sketchPath)) {
        let sketch = fs.readFileSync(sketchPath, 'utf-8');

        // Remplace createCanvas ou ajoute-le
        if (/createCanvas\s*\(\s*\d+\s*,\s*\d+\s*\)/.test(sketch)) {
            sketch = sketch.replace(/createCanvas\s*\(\s*\d+\s*,\s*\d+\s*\)/, 'createCanvas(400, 220)');
        } else if (/function setup\s*\(\)\s*{/.test(sketch)) {
            sketch = sketch.replace(/function setup\s*\(\)\s*{/, 'function setup() {\n  createCanvas(400, 220);');
        } else {
            console.log(`⚠️ setup() introuvable dans ${sketchPath}`);
        }

        fs.writeFileSync(sketchPath, sketch, 'utf-8');
        console.log(`✅ canvas fixé dans ${sketchPath}`);
    }

    // --- Étape 2 : Ajouter overflow: hidden à <style> ---
    if (fs.existsSync(indexPath)) {
        let html = fs.readFileSync(indexPath, 'utf-8');
        if (!html.includes('overflow: hidden')) {
            html = html.replace(
                '</style>',
                '  body { margin: 0; overflow: hidden; }\n</style>'
            );
            fs.writeFileSync(indexPath, html, 'utf-8');
            console.log(`✅ style ajouté dans ${indexPath}`);
        }
    }
}