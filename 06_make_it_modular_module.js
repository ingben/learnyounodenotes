var fs = require('fs');
var path = require('path');

var result = []
var filtered_ls = function(dirname, ext, callback){

  fs.readdir(dirname, function(err, list){
    if (err){
      return callback(err)
    }

    list.forEach(function(file) {
      if (path.extname(file) === "." + ext) {
        result.push(file)
      }
    })
    callback(null, result)
  })
}

module.exports = filtered_ls
