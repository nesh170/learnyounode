var fs = require('fs')

fs.readFile(process.argv[2],calculateLineBreaks);

function calculateLineBreaks(err, bufferData){
	if(err) console.error(error);
	str = bufferData.toString();
	console.log(str.split('\n').length-1);
}

