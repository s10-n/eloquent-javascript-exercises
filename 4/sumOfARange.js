let range = function(start,end,step=1) {
    let rangeArray = [];
    if (Math.sign(step) == 1) {
	for (let index = start; index <= end; index += step) {
	    rangeArray.push(index);
	}
    }
    if (Math.sign(step) == -1) {
	for (let index = start; index >= end; index += step) {
	    rangeArray.push(index);
	}
    }
    return rangeArray;
}

let sum = function(numberArray) {
    let sumTotal = 0;
    for (number of numberArray) {
	sumTotal += number;
    }
    return sumTotal;
}
