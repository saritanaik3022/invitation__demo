const fs = require('fs');

const css = fs.readFileSync('css_test.css', 'utf8');

let pos = 0;
while ((pos = css.indexOf('.eng007-countdown', pos)) !== -1) {
  console.log(css.substring(pos, pos + 300));
  console.log('----------------');
  pos += 18;
}
