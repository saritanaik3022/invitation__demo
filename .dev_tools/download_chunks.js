const https = require('https');
const fs = require('fs');
const path = require('path');

const chunks = [
  'Eng007-bghAvj9g.js',
  'eng007-HomePage-D1Nawfvh.js',
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

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.log(`Failed to download ${url}: status ${res.statusCode}`);
        return resolve();
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${url}:`, err);
      resolve();
    });
  });
}

async function main() {
  if (!fs.existsSync('eng007_chunks')) {
    fs.mkdirSync('eng007_chunks');
  }
  for (const chunk of chunks) {
    const url = `https://eng007-livedemo.invitationnation.in/assets/${chunk}`;
    const dest = path.join('eng007_chunks', chunk);
    await downloadFile(url, dest);
  }
}

main();
