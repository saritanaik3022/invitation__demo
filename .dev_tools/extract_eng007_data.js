const fs = require('fs');

const content = fs.readFileSync('eng007_chunks/Eng007-bghAvj9g.js', 'utf8');

// Find all URLs or image mappings in Eng007-bghAvj9g.js
const urls = content.match(/https?:\/\/[^\s"'`)]+/g) || [];
console.log('URLs in Eng007-bghAvj9g.js:', [...new Set(urls)]);

// Find default data or variables passed to HomePage
// Let's print the top 4000 characters of Eng007-bghAvj9g.js
console.log('\n--- TOP 3000 CHARACTERS ---');
console.log(content.substring(0, 3000));

// Let's also check for images object
const imgIdx = content.indexOf('herocouple');
if (imgIdx !== -1) {
  console.log('\n--- AROUND herocouple ---');
  console.log(content.substring(Math.max(0, imgIdx - 300), Math.min(content.length, imgIdx + 800)));
}
