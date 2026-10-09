const fs = require('fs');

const js = fs.readFileSync('js_test.js', 'utf8');
const css = fs.readFileSync('css_test.css', 'utf8');

console.log('--- ASSET URLS IN JS & CSS ---');
const assetRegex = /(https?:\/\/[^\s"'`)]+|[\/a-zA-Z0-9_\-\.]+\.(?:png|jpg|jpeg|svg|webp|mp3|wav|gif|woff2?|ttf))/gi;
const matches = new Set();
let m;
while ((m = assetRegex.exec(js)) !== null) {
  if (!m[1].includes('node_modules') && !m[1].includes('schema.org') && !m[1].includes('w3.org') && !m[1].includes('babel')) {
    matches.add(m[1]);
  }
}
while ((m = assetRegex.exec(css)) !== null) {
  matches.add(m[1]);
}

console.log('Found assets count:', matches.size);
const assetList = Array.from(matches);
console.log('Assets sample:', assetList.filter(a => /\.(png|jpg|jpeg|svg|webp|mp3)/i.test(a)));

console.log('\n--- FONT FAMILIES IN CSS ---');
const fontMatches = css.match(/font-family:[^;]+;/gi) || [];
const uniqueFonts = [...new Set(fontMatches)];
console.log(uniqueFonts.slice(0, 15));

console.log('\n--- FONT IMPORTS / URLS ---');
const fontUrls = css.match(/@import[^;]+;|@font-face\s*\{[^}]+\}/gi) || [];
console.log(fontUrls.slice(0, 10));

// Search for texts in JS
console.log('\n--- SEARCHING SPECIFIC TEXTS ---');
const keywords = ['Ananya', 'Aarav', 'countdown', 'Adithya', 'Hall Complex', 'Cake Cutting', 'Ring Ceremony', 'Lunch'];
for (const kw of keywords) {
  const idx = js.indexOf(kw);
  if (idx !== -1) {
    console.log(`Keyword "${kw}" found around:`);
    console.log(js.substring(Math.max(0, idx - 150), Math.min(js.length, idx + 250)));
    console.log('------------------');
  } else {
    console.log(`Keyword "${kw}" NOT found`);
  }
}
