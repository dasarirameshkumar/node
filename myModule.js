var fs = require('fs');
var path = require("path");

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function(err, files){
        if(err){
            return callback(err);
        }
        var result = [];
        files.forEach(function(file){
            if(path.extname(file) === '.' + ext){
                result.push(file);
            };
        });
        callback(null, result);
    })
}