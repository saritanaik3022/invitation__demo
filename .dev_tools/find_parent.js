const fs = require('fs');

const js = fs.readFileSync('js_test.js', 'utf8');

// Where is Eng007-bghAvj9g imported?
const idx = js.indexOf('Eng007-bghAvj9g');
if (idx !== -1) {
  console.log('Found Eng007-bghAvj9g at', idx);
  console.log(js.substring(Math.max(0, idx - 500), Math.min(js.length, idx + 1000)));
}

// Also let's search for "eng007" in all files or see what API call fetches template data!
const fetchMatch = js.match(/https?:\/\/[^\s"'`)]+\/api\/[^\s"'`)]+/g);
console.log('API URLs:', fetchMatch);
