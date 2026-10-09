const fs = require('fs');

const js = fs.readFileSync('js_test.js', 'utf8');

// Find __vite__mapDeps definition
const idx = js.indexOf('__vite__mapDeps');
if (idx !== -1) {
  console.log('Found __vite__mapDeps at', idx);
  console.log(js.substring(Math.max(0, idx - 100), Math.min(js.length, idx + 1500)));
}

// Where does eng007 get its images and data?
// Search for "eng007" in all files or search for how eng007 is configured in the templates list
const engMatch = js.indexOf('templateId:"eng007"');
const engMatch2 = js.indexOf('"eng007"');
console.log('engMatch:', engMatch, 'engMatch2:', engMatch2);
