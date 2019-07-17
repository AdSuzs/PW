var http = require('http');

var server = http.createServer(function(req,res){
    res.write("Instituto de Computação");
    res.end();
});
server.listen(3000);