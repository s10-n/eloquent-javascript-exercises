function characterScript(code) {
    for (script of SCRIPTS) {
	if (script.ranges.some(([from, to]) => {
	    return code >= from && code < to;
	})) {
	    return script;
	}
    }
    return script
}

function dominantDirection(text) {
    let directions = {};
    for (letter of text) {
	directions[characterScript(letter.charCodeAt()).direction] = 
	    (directions[characterScript(letter.charCodeAt()).direction] || 0) + 1;
    }
    function getDomDirection(domDirection, direction) {
	return directions[direction] > directions[domDirection] ? direction : domDirection;
    }
    return Object.keys(directions).reduce(getDomDirection)
}
