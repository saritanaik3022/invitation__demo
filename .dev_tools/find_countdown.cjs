const fs = require('fs');

const js = fs.readFileSync('js_test.js', 'utf8');

// Find Countdown component
// It takes targetDate and className
const idx = js.indexOf('DAYS');
if (idx !== -1) {
  console.log('Found DAYS in JS at', idx);
  console.log(js.substring(Math.max(0, idx - 300), Math.min(js.length, idx + 400)));
}
