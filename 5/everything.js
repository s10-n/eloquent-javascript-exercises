function every(array, test) {
    let result = true;
    for (item of array) {
	if (!(test(item))){
	    result = false;
	}
    }
    return result;
}

function every(array, test) {
    let result = true;
    if (array.some(a => test(a) == false)) {
	result = false;
    }
    return result;
}
