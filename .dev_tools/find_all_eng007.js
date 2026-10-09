const fs = require('fs');

const js = fs.readFileSync('js_test.js', 'utf8');

let pos = 0;
while ((pos = js.indexOf('Eng007', pos)) !== -1) {
  console.log(`Match at ${pos}:`);
  console.log(js.substring(Math.max(0, pos - 150), Math.min(js.length, pos + 350)));
  console.log('----------------');
  pos += 6;
}
