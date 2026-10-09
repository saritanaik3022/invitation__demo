const fs = require('fs');
const path = require('path');

const dir = 'eng007_chunks';
const files = fs.readdirSync(dir);

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  console.log(`\n================= ${file} (${content.length} bytes) =================`);
  
  // Find image assets
  const assetRegex = /(https?:\/\/[^\s"'`)]+|[\/a-zA-Z0-9_\-\.]+\.(?:png|jpg|jpeg|svg|webp|mp3|wav|gif|woff2?|ttf))/gi;
  const assets = new Set();
  let m;
  while ((m = assetRegex.exec(content)) !== null) {
    if (!m[1].includes('node_modules') && !m[1].includes('schema.org') && !m[1].includes('w3.org')) {
      assets.add(m[1]);
    }
  }
  console.log('Assets:', Array.from(assets));

  // Show a snippet or interesting strings
  console.log('Preview:');
  console.log(content.substring(0, 1000));
}
