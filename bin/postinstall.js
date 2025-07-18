const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'checklist.md');
const targetDir = process.env.INIT_CWD || process.cwd();
const target = path.join(targetDir, 'WEBDEV-CHECKLIST.md');

fs.copyFile(source, target, (err) => {
  if (err) {
    console.error('❌ Failed to copy checklist:', err);
  } else {
    console.log(`✅ Webdev checklist added as WEBDEV-CHECKLIST.md in ${targetDir}`);
  }
});

