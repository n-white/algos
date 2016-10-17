// Given a sorted array like object where you don't have a length method
// Find the index where value X exists

// Search for a segment where the value is between
var valueFinder = function(listObj, value) {
	var index = 1;
	while (listObj[index] !== undefined && listObj[index] < value) {
		// Double the index value
		index *= 2
	}
	console.log('levels found')
	return binarySearch(listObj, index / 2, index, value)
}

// Now we've found the segment, do a binary search to find the value's index position
var binarySearch = function(listObj, low, high, value) {
	var mid = Math.floor((low + high) / 2);
	// BASE CASE 1: Value is found
	if (listObj[mid] === value) {
		return mid;
	}
	// BASE CASE 2: Value is never found
	if (low >= high) {
		return -1
	}
	// RECRUSIVE CASE: continue binarySearch
	if (value > listObj[mid]) {
		// Search the right half
		return binarySearch(listObj, mid + 1, high, value);
	} else {
		// Search the left half
		return binarySearch(listObj, low, mid - 1, value);
	}
}

var test = [1, 3, 5, 7, 9, 12, 14, 15, 16, 18, 23, 24, 26, 27, 28, 29, 30, 32, 36, 37, 39, 41, 44, 45, 46, 48, 49, 50]
var position = valueFinder(test, 50);
console.log(position, test[position])
