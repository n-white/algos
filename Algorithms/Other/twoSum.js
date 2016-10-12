// https://leetcode.com/articles/two-sum/

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution.

// Example:
// Given nums = [1, 2, 11, 7, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// FIRST SOLUTION: Quadratic solution
var twoSum = function(nums, target) {

	for (var i = 0; i < nums.length; i++) {
		for (var j = 0; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
				
			}
		}
	}

	return 'no solution';
}

// SECOND SOLUTION: Solution using a hashtable
var hashtable = function() {
	this.storage = [];
	this.storageLimit = 10;
}

hashtable.prototype.add = function(key, value) {
	var index = getIndexBelowMaxForKey(key, this.storageLimit);

	this.storage[index] = this.storage[index] || [];

	// Collision detection
	for (var i = 0; i < this.storage[index].length; i++) {
		if (this.storage[index][i][0] === key) {
			this.storage[index][i][1] = value;
			return;
		}
	}

	// If no collision then just push it to the index
	this.storage[index].push([key, value])

}

hashtable.prototype.contains = function(key) {
	// Key for this problem is the number we are looking for and value is the number's position in the array
	var index = getIndexBelowMaxForKey(key, this.storageLimit);
	this.storage[index] = this.storage[index] || [];
	for (var i = 0; i < this.storage[index].length; i++) {
		if (this.storage[index][i][0] === key) {
			return this.storage[index][i][1];
		}
	}
	return false;
}

var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


// This can be solved by adding each number to the hashtable
// Hashtables have constant lookup time
// So as we go through the index, we can check if the offset number we need has been hashed
var twoSumHash = function(nums, target) {

	var hash = new hashtable();

	for (var i = 0; i < nums.length; i++) {
		// Calculate offsetNumber needed
		var offsetNumber = target - nums[i];
		// See if the offset number needed exists
		var offsetPositionLookup = hash.contains(offsetNumber);
		console.log(i, nums[i], offsetNumber, offsetPositionLookup)
		// Check if the offset number needed was hashed already and not equal to the current number we are looking at
		if (offsetPositionLookup !== false) {
			return [i, offsetPositionLookup];
		}
		// Add current number to the hash
		hash.add(nums[i], i);
	}
	return 'no solution exists';
}

// console.log(twoSumHash([1, 2, 11, 7, 15], 9));
console.log(twoSumHash([0, 4, 3, 0], 0));	