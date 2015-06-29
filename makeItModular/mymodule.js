var path = require('path');
var fs = require('fs');
var extension = "";
var callbackFn = undefined

module.exports = function(dir, extStr, callback){
	callbackFn = callback;
	extension = extStr;
	fs.readdir(dir,checkLines)
}

function checkLines(err,data){
	if(err) 
		return callbackFn(err,null);
	result=[];
	result = data.filter(function(str){
		return path.extname(str)===("."+extension);
	})
	callbackFn(null,result);
}
