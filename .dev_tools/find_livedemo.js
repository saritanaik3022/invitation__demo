const fs = require('fs');

const js = fs.readFileSync('js_test.js', 'utf8');

const regex = /livedemo/gi;
let m;
while ((m = regex.exec(js)) !== null) {
  console.log('Match at', m.index);
  console.log(js.substring(Math.max(0, m.index - 200), Math.min(js.length, m.index + 500)));
  console.log('----------------');
}
