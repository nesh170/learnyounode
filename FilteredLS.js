var fs = require('fs');
var path = require('path');


fs.readdir(process.argv[2],filteringDirectory);

function filteringDirectory(err, listStrings){
	if(err) console.error(err);
	listStrings.forEach(function(str){
		if(path.extname(str)===("."+process.argv[3])){
			console.log(str);
		}
	})
}