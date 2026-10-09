const https = require('https');
const fs = require('fs');
const path = require('path');

const indexData = JSON.parse(fs.readFileSync('eng007_index.json', 'utf8'));

const assetsDir = path.join('src', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Also download audio:
indexData.music = 'https://cdn-admin.invitationnation.in/muisc/VibeDepot+-+Indian.mp3';

async function download(url, filepath) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed ${url}: status ${res.statusCode}`);
        return resolve(false);
      }
      const stream = fs.createWriteStream(filepath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`Saved ${filepath} (${fs.statSync(filepath).size} bytes)`);
        resolve(true);
      });
    }).on('error', (err) => {
      console.error(`Error ${url}:`, err);
      resolve(false);
    });
  });
}

async function main() {
  const assetMap = {};
  for (const [key, url] of Object.entries(indexData)) {
    const ext = path.extname(new URL(url).pathname);
    const filename = `${key}${ext}`;
    const dest = path.join(assetsDir, filename);
    await download(url, dest);
    assetMap[key] = `/src/assets/${filename}`;
  }
  fs.writeFileSync('src/assets/assetsMap.json', JSON.stringify(assetMap, null, 2));
  console.log('Finished downloading all assets!');
}

main();
