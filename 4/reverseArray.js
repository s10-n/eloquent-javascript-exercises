let reverseArray = function(myArray) {
    let reversedArray = [];
    for (let index = myArray.length - 1; index >= 0; index -= 1) {
	reversedArray.push(myArray[index])
    }
    return reversedArray;
}

let reverseArrayInPlace = function(myArray) {
    for (let index = 0; index <= Math.floor(myArray.length/2); index += 1) {
	let lowValue = myArray[index];
	let highValue = myArray[myArray.length - 1 - index];
	myArray[index] = highValue;
	myArray[myArray.length - 1 - index] = lowValue;
    }
}
