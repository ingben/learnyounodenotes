var fs = require('fs')

if (process.argv.length != 3) {
  console.log("[ERROR] - Filename is missing.")
  process.exit(1)
}

filename = process.argv[2]

fs.readFile(filename, 'utf8', function(err, data){
  if (err) {
    console.log("[ERROR] - Reading file failed.")
    process.exit(1)
  }
  newlines = data.split("\n").length - 1

  console.log(newlines)
});
