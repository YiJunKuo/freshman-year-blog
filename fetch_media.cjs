const https = require('https');

const urls = [
  'https://raw.githubusercontent.com/YiJunKuo/freshman-year-blog/main/index.html',
  'https://raw.githubusercontent.com/YiJunKuo/freshman-year-blog/main/club.html',
  'https://raw.githubusercontent.com/YiJunKuo/freshman-year-blog/main/bootstrapclass.html',
  'https://raw.githubusercontent.com/YiJunKuo/freshman-year-blog/main/oceantrash.html',
  'https://raw.githubusercontent.com/YiJunKuo/freshman-year-blog/main/about.html'
];

urls.forEach(url => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log(`\n--- ${url} ---`);
      const imgRegex = /<img[^>]+src="([^">]+)"/g;
      const iframeRegex = /<iframe[^>]+src="([^">]+)"/g;
      const videoRegex = /<video[^>]+src="([^">]+)"/g;
      const sourceRegex = /<source[^>]+src="([^">]+)"/g;
      
      let match;
      while ((match = imgRegex.exec(data)) !== null) {
        console.log('IMG:', match[1]);
      }
      while ((match = iframeRegex.exec(data)) !== null) {
        console.log('IFRAME:', match[1]);
      }
      while ((match = videoRegex.exec(data)) !== null) {
        console.log('VIDEO:', match[1]);
      }
      while ((match = sourceRegex.exec(data)) !== null) {
        console.log('SOURCE:', match[1]);
      }
    });
  });
});
