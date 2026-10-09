const fs = require('fs');

const js = fs.readFileSync('js_test.js', 'utf8');

const regex = /https?:\/\/[^\s"'`)]+\.json[^\s"'`)]*|https?:\/\/cdn[^\s"'`)]+|https?:\/\/api[^\s"'`)]+/gi;
let m;
const urls = new Set();
while ((m = regex.exec(js)) !== null) {
  urls.add(m[0]);
}
console.log('JSON / API / CDN URLs:');
console.log(Array.from(urls));
