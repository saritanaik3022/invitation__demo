const fs = require('fs');

const css = fs.readFileSync('eng007_extracted.css', 'utf8');

// Print first 5000 characters
console.log('--- CSS PREVIEW 1-3000 ---');
console.log(css.substring(0, 3000));

// Find animations and keyframes
const keyframes = css.match(/@keyframes[^{]+\{(?:[^{}]*\{[^{}]*\})*\}/gi) || [];
console.log('\n--- KEYFRAMES ---');
console.log(keyframes);
