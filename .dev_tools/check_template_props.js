const fs = require('fs');
const js = fs.readFileSync('js_test.js', 'utf8');

const regex = /templateId:\s*['"]eng007['"]|tempId:\s*['"]eng007['"]|['"]eng007['"]:\s*\{/gi;
let m;
while ((m = regex.exec(js)) !== null) {
  console.log('Match:', m[0]);
  console.log(js.substring(Math.max(0, m.index - 500), Math.min(js.length, m.index + 1000)));
  console.log('========================');
}

// Also check Eng007-bghAvj9g.js for how images are passed or imported!
const engRoot = fs.readFileSync('eng007_chunks/Eng007-bghAvj9g.js', 'utf8');
const propMatches = engRoot.match(/images:[^,;\}]+/g) || [];
console.log('images in engRoot:', propMatches);

const imgVarMatches = engRoot.match(/const\s+\{[^\}]+\}\s*=\s*images/g) || [];
console.log('imgVarMatches:', imgVarMatches);
