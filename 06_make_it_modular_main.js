var filtered_ls = require('./06_make_it_modular_module')

filtered_ls(process.argv[2], process.argv[3], function(err, files){
  if (err) {
    console.log("ERROR - " + err)
    process.exit(1)
  }

  files.forEach(function(file) {
    console.log(file)
  })
})
