const https = require('https');

const candidates = [
  'https://cdn-admin.invitationnation.in/media/eng007/data.json',
  'https://cdn-admin.invitationnation.in/media/eng007/index.json',
  'https://cdn-admin.invitationnation.in/media/eng007/config.json',
  'https://cdn-admin.invitationnation.in/media/eng007/demo.json',
  'https://cdn-admin.invitationnation.in/media/eng007/details.json',
  'https://cdn-admin.invitationnation.in/media/eng007/livedemo.json',
  'https://cdn-admin.invitationnation.in/media/eng007/sample.json',
  'https://api.invitationnation.in/templates/eng007',
  'https://api.invitationnation.in/templates/eng007/demo',
  'https://api.invitationnation.in/api/templates/eng007',
  'https://api.invitationnation.in/api/v1/templates/eng007'
];

candidates.forEach(url => {
  https.get(url, res => {
    console.log(url, '-> status:', res.statusCode);
    if (res.statusCode === 200) {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => console.log('CONTENT for', url, ':', data.substring(0, 300)));
    }
  }).on('error', () => {});
});
