// Given a sorte array of n integers that has been rotated an unknown number of times
// Find an element in the array. You can assume array was originally sorted in increasing order


var locateTarget = function(array, target, left, right) {

	var left = left || 0;
	var right = right || array.length - 1;
	var mid = Math.floor((right + left) / 2);

	console.log('left: ', left, 'mid: ', mid, 'right: ', right)

	// BASE CASE 1: Element found
	if (target === array[mid]) {
		return mid;
	}
	// BASE CASE 2: Element never found
	if (right < left) {
		return -1
	}

	// One half of the array will be sorted, so we check which half
	// Right half is sorted
	if (array[mid] < array[right]) {
		if (target > array[mid] && target <= array[right]) {
			// Search right
			console.log('@')
			return locateTarget(array, target, mid + 1, right);
		} else {
			// Search left
			console.log('#')
			return locateTarget(array, target, left, mid);
		}
	}
	// Left half is sorted
	if (array[mid] > array[left]) {
		if (target < array[mid] && target >= array[left]) {
			// Search left
			console.log('?')
			return locateTarget(array, target, left, mid - 1);
		} else {
			console.log('!')
			// Search right
			return locateTarget(array, target, mid + 1, right);
		}
	}

	// NOTE: IF THE LEFT, RIGHT AND MID ARE EQUAL TO EACH OTHER, THEN YOU HAVE TO SEARCH THE WHOLE ARRAY
	// WHICH WOULD BE O(N)

}


var test = [15, 16, 19, 20, 1, 3, 4, 5, 7, 10, 14]
var test2 = [10, 15, 20, 0, 5]
var test3 = [50, 5, 20, 30, 40]

console.log(locateTarget(test, 5))
console.log(locateTarget(test, 19))

console.log(locateTarget(test2, 5))
console.log(locateTarget(test2, 10))

console.log(locateTarget(test3, 30))
console.log(locateTarget(test3, 5))