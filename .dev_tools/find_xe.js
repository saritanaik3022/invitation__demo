const fs = require('fs');

const engRoot = fs.readFileSync('eng007_chunks/Eng007-bghAvj9g.js', 'utf8');

// Find the component function declaration
// It ends with export{xe as default};
// Let's search for function xe
const idx = engRoot.lastIndexOf('function');
console.log('Last function:', engRoot.substring(idx, idx + 1000));
