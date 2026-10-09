const fs = require('fs');

const js = fs.readFileSync('js_test.js', 'utf8');

// Find all occurrences of eng007 with media or assets
const regex = /https?:\/\/[^\s"'`)]*eng007[^\s"'`)]*/gi;
let m;
const matches = new Set();
while ((m = regex.exec(js)) !== null) {
  matches.add(m[0]);
}
console.log('eng007 URL matches:');
console.log(Array.from(matches));

// Also search for where Eng007 component is instantiated: "tempId" or "templateId" === "eng007"
const compRegex = /["']eng007["']/gi;
let match;
while ((match = compRegex.exec(js)) !== null) {
  console.log('Match at', match.index);
  console.log(js.substring(Math.max(0, match.index - 200), Math.min(js.length, match.index + 400)));
  console.log('-----------------');
}
