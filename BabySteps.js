function sum(array){
	var numberSum=0;
	for(var index=2;index<array.length;index++){
		numberSum+=Number(array[index]);
	}
	return numberSum;
}


console.log(sum(process.argv));