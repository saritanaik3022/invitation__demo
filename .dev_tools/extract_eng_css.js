const fs = require('fs');

const css = fs.readFileSync('css_test.css', 'utf8');

// Find all css rules that contain eng007
const rules = css.match(/[^{}]*eng007[^{}]*\{[^}]*\}/gi) || [];
console.log('Rules matching eng007 in css_test.css:', rules.length);

// Let's write all eng007 css rules into a file
let engCss = '';
let pos = 0;
while ((pos = css.indexOf('.eng007', pos)) !== -1) {
  // Find start of selector (look backwards for } or start)
  const prevBrace = css.lastIndexOf('}', pos);
  const start = prevBrace === -1 ? 0 : prevBrace + 1;
  // Find matching closing brace
  const nextBrace = css.indexOf('}', pos);
  if (nextBrace !== -1) {
    engCss += css.substring(start, nextBrace + 1).trim() + '\n\n';
    pos = nextBrace + 1;
  } else {
    break;
  }
}

fs.writeFileSync('eng007_extracted.css', engCss);
console.log('Extracted eng007 css length:', engCss.length);
console.log('Preview:');
console.log(engCss.substring(0, 1500));
