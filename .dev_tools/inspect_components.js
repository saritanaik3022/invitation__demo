const fs = require('fs');
const path = require('path');

const dir = 'eng007_chunks';
const files = [
  'eng007-HeroSection-NnudXIF0.js',
  'eng007-Countdown-CbV2WWDo.js',
  'eng007-AboutCouple-EMeVJhMt.js',
  'eng007-WishesSection-B7RH0bnF.js',
  'eng007-SendWishes-Dpd0jbu6.js',
  'eng007-Schedule-DkHCpA-2.js',
  'eng007-Location-D9yeU5Q_.js',
  'eng007-Navbar-DR85rsvp.js',
  'eng007-Music-wDZ8s3hO.js'
];

let output = '';

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  output += `\n=================== ${file} ===================\n`;
  const classMatches = content.match(/className:\s*["'][^"']+["']/g) || [];
  const uniqueClasses = Array.from(new Set(classMatches.map(c => c.replace(/className:\s*["']/, '').replace(/["']$/, ''))));
  output += 'Classes:\n' + JSON.stringify(uniqueClasses, null, 2) + '\n\n';
  output += 'Code:\n' + content + '\n\n';
}

fs.writeFileSync('components_analysis.txt', output);
console.log('Saved components_analysis.txt, size:', output.length);
