const fs = require('fs');
const path = require('path');

const apiBase = process.env.API_BASE_URL || '';
const src = path.join(__dirname, 'config.template.js');
const dest = path.join(__dirname, 'config.js');

let content = fs.readFileSync(src, 'utf8');
content = content.replace('__API_BASE__', apiBase);
fs.writeFileSync(dest, content);
console.log(`Wrote ${dest} with API_BASE_URL=${apiBase}`);
