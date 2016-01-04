var fs = require('fs');

if (process.argv.length != 3) {
  console.log("[ERROR] - Filename is missing.");
  process.exit(1);
}

filename = process.argv[2];
content = fs.readFileSync(filename, 'utf8').split("\n");
newlines = content.length - 1

console.log(newlines);
