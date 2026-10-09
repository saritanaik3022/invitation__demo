const fs = require('fs');

const js = fs.readFileSync('js_test.js', 'utf8');

const regex = /https?:\/\/[^\s"'`)]+\.(?:webp|jpg|jpeg|png)[^\s"'`)]*/gi;
const urls = [...new Set(js.match(regex) || [])];
console.log('Image URLs in JS:', urls);
