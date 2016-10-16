// Given two sorted arrays, A and B, where A has a large enough bugger at the end to hold B
// Write a method to merge B into A in sorted order

// Similar to merge part of merge sort
// But we merge the end of both indices so that we don't have to shift so many elements to the right side of the array
var sortedMerge = function(a, b) {
	for (var i = 0; i < b.length; i++) {
		for (var j = a.length - 1; j >= 0; j--) {
			if (b[i] > a[j]) {
				a = a.slice(0, j + 1).concat(b[i]).concat(a.slice(j + 1))
				break;
			}
		}
	}

	return a;
}

var a = [1, 3, 5, 7, 9];
var b = [2, 4, 6, 8];

console.log(sortedMerge(a, b));