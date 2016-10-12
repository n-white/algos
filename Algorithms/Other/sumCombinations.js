// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
// Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// Recursive solution
const sumCombo = (array, target) => {
	const cache = [];
	let rounds = 0;
	let sum = 0

	const recursiveHelper = (currentArray, rounds, sum) => {
		// Base case when you reach a triplet
		if (rounds === 3) {
			console.log(currentArray);
			if (sum === target) {
				cache.push(currentArray);
			}
			currentArray.pop()
			return;
		}

		// For loop to recursively pass next variable
		for (let i = 0; i < array.length; i++) {
			currentArray.push(array[i]);
			console.log(currentArray, rounds, sum);
			recursiveHelper(currentArray, rounds + 1, sum += array[i])
			rounds--
		}
		return;
	}

	recursiveHelper([], rounds, sum);
	return cache;
}

// n^3 solution
var threeSum = function(nums) {
  	var cache = {};
    var results = [];
    
	for (var i = 0; i < nums.length; i++) {
		for (var j = i + 1; j < nums.length; j++) {
			for (var k = j + 1; k < nums.length; k++) {
				if (nums[i] + nums[j] + nums[k] === 0) {
				    var current = [nums[i], nums[j], nums[k]].sort()
				    if (!cache[JSON.stringify(current)]) {
				        cache[JSON.stringify(current)] = true;
				        results.push(current);
				    }
				}
			}
		}
	}

	return results;  
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));