var http = require('http');
var str = "";

http.get(process.argv[2],callback);

function callback(response){
	response.setEncoding('utf8');
	response.on("data",function(data){
		str+=data;
	})
	response.on("error", console.error);
	response.on("end",function(){
		console.log(str.length);
		console.log(str);
	})
}

    // var http = require('http')
    // var bl = require('bl')
    
    // http.get(process.argv[2], function (response) {
    //   response.pipe(bl(function (err, data) {
    //     if (err)
    //       return console.error(err)
    //     data = data.toString()
    //     console.log(data.length)
    //     console.log(data)
    //   }))  
    // })