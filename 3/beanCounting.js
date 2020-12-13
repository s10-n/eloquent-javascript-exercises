let countBs = function(string) {
    let count = 0;
    for (let stringIndex = 0; stringIndex <= string.length - 1; stringIndex ++) {
	if (string[stringIndex] == "B") {
	    count ++
	}
    }
    return count
}

et countChar = function(string, char) {
    let count = 0;
    for (let stringIndex = 0; stringIndex <= string.length - 1; stringIndex ++) {
	if (string[stringIndex] == char) {
	    count ++
	}
    }
    return count
}
