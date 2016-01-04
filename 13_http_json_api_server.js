var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){

  if (req.method != "GET") {
    return req.end("Give me GET!\n")
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })

  the_url = url.parse(req.url, true)

  if (the_url.pathname === "/api/parsetime") {
    res.write(parsetime(the_url))
  }

  if (the_url.pathname === "/api/unixtime") {
    res.write(unixtime(the_url))
  }

  res.end("\n")

})

var parsetime = function(the_url){
  var date = new Date(the_url.query.iso)
  return JSON.stringify({'hour':date.getHours(), 'minute':date.getMinutes(), 'second':date.getSeconds()})
}

var unixtime = function(the_url){
  var date = new Date(the_url.query.iso)
  return JSON.stringify({'unixtime':date.getTime()})
}

server.listen(process.argv[2])
