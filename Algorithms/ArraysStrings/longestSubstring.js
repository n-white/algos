// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. 
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.






var lengthOfLongestSubstring = function(s) {
	var cache = {};
	var currentSubstring = '';
	var longestSubstring = '';
	for (var i = 0; i < s.length; i++) {
		console.log(currentSubstring)
		// Check if the current character is already found in the cache
		if (!!cache[s[i]]) {
			// Replace longestSubstring with current substring if longer
			if (currentSubstring.length > longestSubstring.length) {
				longestSubstring = currentSubstring;
			}
			// Reset cache and current substring to the current value
			cache = {};
			currentSubstring = '';
		}
			
		currentSubstring += s[i];
		cache[s[i]] = true;
		
	} 
	return currentSubstring;
};

console.log(lengthOfLongestSubstring('dvdf'))