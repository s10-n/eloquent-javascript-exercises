let arrayToList = function(array) {
    let list = {}
    let listSoFar = null
    for (item of array.reverse()) {
	list.value = item;
	list.rest = listSoFar
	listSoFar = {...list};
    }
    return list
}

let listToArray = function(list, array=[]) {
    if (list.rest != null) {
	array.push(list.value);
	listToArray(list.rest,array);
    }
    else {
	array.push(list.value);
    }
    return array;
}

let prepend = function(element, list) {
    let returnedList = {};
    returnedList.value = element;
    returnedList.rest = list;
    return returnedList;
}

let nth = function(list, number, index=0) {
    if (list == null) {
	return undefined;
    }
    if (number == index) {
	return list.value;
    }
    else {
	return nth(list.rest, number, index + 1);
    }
}
