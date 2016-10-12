// Given a string S, find the longest palindromic substring in S. 
// You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.


/**
 * @param {string} s
 * @return {string}
 */


// Iterate and expand around the center of each position
// For even strings like 'abba', the center is between position 1 and 2
var longestPalindrome = function(s) {

	var start = 0;
	var end = 0;

	for (var i = 0; i < s.length; i++) {
		// Find length assuming an odd palindrome
		var length1 = expandAroundCenter(s, i, i);
		// Find length assuming an even palindrome
		var length2 = expandAroundCenter(s, i, i + 1);
		// Find the maximum length of the two
		var maxLength = Math.max(length1, length2);
		// If the current length is larger than the current max
		if (maxLength > end - start) {
			console.log(maxLength)
			start = i - ((maxLength ) / 2);
			end = i + (maxLength / 2);
			console.log(i, start, end);
		}
	}

	return s.substring(start, end + 1);

};

// Expland until no longer a palindrome and return the number
var expandAroundCenter = function(string, left, right) {
	while (left >= 0 && right < string.length && string[left] === string[right]) {
		left--;
		right++;
	}
	return right - left - 1;
}

var test = 'eerewqasdffdsaqwerddddddddd';

console.log(longestPalindrome(test));

// Time complexity : O(n^2) Since expanding a palindrome around its center could take O(n) time, the overall complexity is O(n^2)