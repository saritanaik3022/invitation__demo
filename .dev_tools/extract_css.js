const fs = require('fs');

const engRoot = fs.readFileSync('eng007_chunks/Eng007-bghAvj9g.js', 'utf8');

// Find all style variables (strings with CSS)
const cssMatches = engRoot.match(/`[^`]*\.eng007-[^`]*`/g) || [];
console.log('Found CSS chunks count:', cssMatches.length);

let combinedCSS = '';
for (const chunk of cssMatches) {
  // Remove backticks
  const css = chunk.slice(1, -1);
  combinedCSS += css + '\n\n';
}

fs.writeFileSync('eng007_styles.css', combinedCSS);
console.log('Saved eng007_styles.css! Size:', combinedCSS.length);
