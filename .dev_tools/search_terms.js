const fs = require('fs');

const js = fs.readFileSync('js_test.js', 'utf8');

const terms = ['topleft', 'herocouple', 'bridephoto', 'wishesflower', 'countflowerleft', 'bordershort', 'borderlong'];

for (const term of terms) {
  let idx = 0;
  let count = 0;
  while ((idx = js.indexOf(term, idx)) !== -1) {
    count++;
    console.log(`Term "${term}" at index ${idx}:`);
    console.log(js.substring(Math.max(0, idx - 100), Math.min(js.length, idx + 250)));
    console.log('-------------------------');
    idx += term.length;
    if (count > 3) break;
  }
  if (count === 0) {
    console.log(`Term "${term}" NOT found in js_test.js`);
  }
}
