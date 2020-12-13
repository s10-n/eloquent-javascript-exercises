let rowString = ''
let size = 8

for (let row = 0; row < size; row ++) {
    rowString = ''
    for (let column = 0; column <= size-2; column ++) {
	if (column % 2) {
	    rowString += ' '
	}
    else {
	rowString += '#'
    }
    }
    if (row % 2) {
	rowString = rowString + ' '
    }
    else {
	rowString = ' ' + rowString
    }
    console.log(rowString)
}
