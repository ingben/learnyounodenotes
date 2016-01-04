var http = require('http');
var bl = require('bl');

var store = []
var count = 0

var print_results = function(){
    store.forEach(function(entry){
      console.log(entry)
  })
}

function http_get(index){
  http.get(process.argv[index], function(response){
    response.pipe(bl(function(err, data){

      if (err) {
        return console.error(err)
      }

      store[index - 2] = data.toString()
      count++

      if (count === process.argv.length - 2) {
        print_results()
      }
    }))
  })
}

for (var i = 2; i < process.argv.length; i++) {
  http_get(i)
}
