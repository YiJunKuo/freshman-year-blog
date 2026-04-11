const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace src="/freshman-year-blog/images/..." with src={`${import.meta.env.BASE_URL}images/...`}
  content = content.replace(/src="\/freshman-year-blog\/images\/([^"]+)"/g, 'src={`${import.meta.env.BASE_URL}images/$1`}');
  
  // Replace image: "/freshman-year-blog/images/..." with image: `${import.meta.env.BASE_URL}images/...`
  content = content.replace(/image:\s*"\/freshman-year-blog\/images\/([^"]+)"/g, 'image: `${import.meta.env.BASE_URL}images/$1`');

  fs.writeFileSync(filePath, content, 'utf8');
}

const files = [
  'src/pages/Home.tsx',
  'src/pages/About.tsx',
  'src/pages/Posts.tsx',
  'src/pages/posts/OceanTrash.tsx',
  'src/pages/posts/BootstrapClass.tsx',
  'src/pages/posts/Club.tsx'
];

files.forEach(file => {
  replaceInFile(path.join(__dirname, file));
  console.log(`Updated ${file}`);
});
