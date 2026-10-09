const fs = require('fs');

const css = fs.readFileSync('css_test.css', 'utf8');

// We want all css rules matching eng007, or .shared-, or #music-btn, or #call-btn, or .nimbus-container
const keywords = [
  'eng007',
  'nimbus-container',
  'shared-sendwishes',
  'shared-countdown',
  'shared-navbar',
  'music-btn',
  'call-btn',
  'music-section'
];

let extracted = '';
let pos = 0;

// Also include the font import at the beginning
extracted += `@import url('https://fonts.googleapis.com/css2?family=Arizonia&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');\n\n`;

// Find all rules containing any of the keywords
let count = 0;
while (pos < css.length) {
  const nextOpen = css.indexOf('{', pos);
  if (nextOpen === -1) break;
  
  // Find where selector starts
  let selStart = css.lastIndexOf('}', nextOpen);
  selStart = selStart === -1 ? 0 : selStart + 1;
  const selector = css.substring(selStart, nextOpen).trim();
  
  // Find matching closing brace (handling nested if any)
  let braceCount = 1;
  let cur = nextOpen + 1;
  while (cur < css.length && braceCount > 0) {
    if (css[cur] === '{') braceCount++;
    else if (css[cur] === '}') braceCount--;
    cur++;
  }
  const block = css.substring(selStart, cur).trim();
  
  const matches = keywords.some(k => block.includes(k));
  if (matches) {
    extracted += block + '\n\n';
    count++;
  }
  
  pos = cur;
}

fs.writeFileSync('src/index.css', extracted);
console.log(`Extracted ${count} rule blocks to src/index.css! File size: ${extracted.length} bytes`);
