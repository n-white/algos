// Write a method to sort an array of strings so that all the anagrams are next to each other



// We can do this by using a hash table which maps from the sorted version of a word to a list of its anagrams
// Once we've grouped them, we can put them back into the array
// I'm going to use an object cache instead of a hash table though
var sortAnagrams = function(array) {
	var cache = {};

	// Fill up the cache / hash table with the anagrams grouped by the sorted key
	while (array.length) {
		var currentString = array.shift();
		var sortedString = currentString.split('').sort().join('');
		cache[sortedString] = cache[sortedString] || [];
		cache[sortedString].push(currentString);
	}

	// Put the anagrams back in the array
	for (key in cache) {
		cache[key].forEach((item) => {
			array.push(item);
		})
	}

	// Return the mutated array;
	return array;
}

var test = ['bae', 'rare', 'abe', 'rear'];

console.log(sortAnagrams(test));


