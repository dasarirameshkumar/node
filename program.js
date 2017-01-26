var myModule = require('./myModule.js')

myModule(process.argv[2], process.argv[3], callback_fun);

function callback_fun(err, data){
    if(err){
        console.error(err);
    }
    else
    {
        data.forEach(function(file){ 
            console.log(file);
        });
    }
}

