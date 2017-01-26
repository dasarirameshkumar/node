var net = require('net');
var http = require('http');
var fs = require("fs");
/*var server = net.createServer(function(socket){
    
    var date = new Date();
    var currentTime = date.getFullYear() + "-0" + (Number(date.getMonth()) + 1) + "-" + date.getDate() + " " + date.getHours() +":0"+ date.getMinutes();
    socket.write(currentTime + "\n");
    socket.end();
    
})*/

var server = http.createServer(function (request, response) {
    /* My Approach
    var stream = fs.createReadStream(process.argv[3], 'utf8');
    var result = "";
    stream.on('data',function(buffer){
        result += buffer;
    }).on('end', function(){
        response.write(result);    
    }); */
    
    response.writeHead(200, {'content-type' : 'text/plain'});
    fs.createReadStream(process.argv[3]).pipe(response);
})

server.listen(process.argv[2]);


