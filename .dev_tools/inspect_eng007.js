const fs = require('fs');
const js = fs.readFileSync('js_test.js', 'utf8');

const regex = /eng007[a-zA-Z0-9_\-\.\/]+/gi;
let m;
const eng007Assets = new Set();
while ((m = regex.exec(js)) !== null) {
  eng007Assets.add(m[0]);
}
console.log('eng007 matches count:', eng007Assets.size);
console.log(Array.from(eng007Assets).slice(0, 30));

// Let's search around "eng007"
const idx = js.indexOf('eng007');
if (idx !== -1) {
  console.log('Context around first eng007:');
  console.log(js.substring(Math.max(0, idx - 100), Math.min(js.length, idx + 800)));
}

// Find chunks that contain "eng007"
const chunkRegex = /"\/assets\/eng007[^"]+"/g;
const chunks = js.match(chunkRegex) || [];
console.log('eng007 chunks:', chunks);
