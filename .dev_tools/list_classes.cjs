const fs = require('fs');

const css = fs.readFileSync('eng007_extracted.css', 'utf8');

// Find all class names
const classMatches = css.match(/\.eng007-[a-zA-Z0-9_-]+/g) || [];
const uniqueClasses = [...new Set(classMatches)];
console.log('Classes count:', uniqueClasses.length);
console.log(uniqueClasses);
