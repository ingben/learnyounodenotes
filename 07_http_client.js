var http = require('http');

var url = process.argv[2]

http.get(url, function(response) {
  response.setEncoding('utf8')
  response.on("error", function(error){
    console.log(error);
  })

  response.on("data", function(data){
    console.log(data);
  })

  response.on("end", function(end){
    // console.log(end);
  })
})
