const fs = require('fs');

const js = fs.readFileSync('js_test.js', 'utf8');

// Search for eng007 images object
const idx = js.indexOf('herocouple');
if (idx !== -1) {
  console.log('Found herocouple in js_test.js at', idx);
  console.log(js.substring(Math.max(0, idx - 500), Math.min(js.length, idx + 1000)));
} else {
  console.log('herocouple not found in js_test.js');
}

// Search for eng007 images mapping
const engIdx = js.indexOf('eng007_');
if (engIdx !== -1) {
  console.log('Found eng007_ at', engIdx);
  console.log(js.substring(Math.max(0, engIdx - 100), Math.min(js.length, engIdx + 600)));
}
