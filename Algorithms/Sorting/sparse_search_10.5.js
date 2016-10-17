// Given a sorted array of strings that is interspersed with empty strings, write a method to find the locatino of a given string

// Function for binary search
var binarySearch = function(array, target, low, high) {
	low = low || 0;
	high = high || array.length - 1;
	var mid = Math.floor((high + low) / 2);
	console.log('low: ', low, 'mid: ', mid, 'high: ', high);

	// BASE CASE 1: Target found
	if (array[mid] === target) {
		return mid;
	}
	// BASE CASE 2: Target never found
	if (low >= high) {
		return -1;
	}

	// Reset midpoint if empty
	if (array[mid].length === 0) {
		var mid = findRealString(array, mid, mid);
		console.log('nearest real string: ', mid);
		// BASE CASE 3: New midpoint is the target
		if (target === array[mid]) {
			return mid;
		}
	}

	// RECURSIVE CASE: Continue binary search
	if (target > array[mid]) {
		// Search to the right side
		return binarySearch(array, target, mid + 1, high)
	} else {
		// Search to the left side
		return binarySearch(array, target, low, mid - 1)
	}
}


// Function to move outwards until you find a string that isn't empty
var findRealString = function(array, left, right) {
	// BASE CASES: String found on right or left side
	if (array[left].length > 0) {
		return left;
	}
	if (array[right].length > 0) {
		return right;
	}

	// RECURSIVE CASE: Increment left and right outwards by one
	return findRealString(array, left - 1, right + 1);
}

var test = ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', '', 'earl']
console.log(binarySearch(test, 'earl'));

// NOTE: Worse case scenario is O(N) if we have to end up looking at every position
// Saying things like this in an interview shows that you're thoughtful

