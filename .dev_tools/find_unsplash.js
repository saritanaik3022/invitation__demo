const fs = require('fs');

const js = fs.readFileSync('js_test.js', 'utf8');

const regex = /https:\/\/images\.unsplash\.com\/[^\s"'`)]+/g;
const unsplashUrls = [...new Set(js.match(regex) || [])];
console.log('Unsplash URLs count:', unsplashUrls.length);
console.log(unsplashUrls);
