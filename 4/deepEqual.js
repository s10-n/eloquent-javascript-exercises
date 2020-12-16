let deepEqual = function(object1, object2) {
    if ((typeof object1 == "object" && object1 != null) && 
        (typeof object1 == "object" && object1 != null)) {
        if (Object.keys(object1).length == Object.keys(object2).length) {
            let value;
            for (value of (Object.keys(object1))) {
                return deepEqual(object1[value], object2[value]);
            }
        }
        else {
            return false;
        }
    } 
    else {
	return object1 === object2;
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// true
console.log(deepEqual(obj, {here: 1, object: 2}));
// false
console.log(deepEqual(obj, {here: 1, is: 3, object: 2}));
// false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// true
