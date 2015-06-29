var mymodule = require('./mymodule.js');

mymodule(process.argv[2],process.argv[3],function(err,str){
	if(err==null){
		str.forEach(function(st){
			console.log(st);
		})
	}
	else{
		console.error(err);
	}
});