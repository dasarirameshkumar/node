var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var data1 ="";
var data2 ="";
var data3 ="";

http.get(url1, function (response){
    var receivedData = "";
    response.setEncoding('utf8');
    response.on('error', console.error);
    response.on("data", function(data){
        receivedData += data;
    });
    response.on("end", function(data){
        data1 = receivedData;
        if(data1 != "" && data2 != "" && data3 != ""){
            console.log(data1);
            console.log(data2);
            console.log(data3);
        }
    });
});

http.get(url2, function (response){
    var receivedData = "";
    response.setEncoding('utf8');
    response.on('error', console.error);
    response.on("data", function(data){
        receivedData += data;
    });
    response.on("end", function(data){
        data2 = receivedData;
         if(data1 != "" && data2 != "" && data3 != ""){
            console.log(data1);
            console.log(data2);
            console.log(data3);
        }
    });
});

http.get(url3, function (response){
    var receivedData = "";
    response.setEncoding('utf8');
    response.on('error', console.error);
    response.on("data", function(data){
        receivedData += data;
    });
    response.on("end", function(data){
        data3 = receivedData;
         if(data1 != "" && data2 != "" && data3 != ""){
            console.log(data1);
            console.log(data2);
            console.log(data3);
        }
    });
});