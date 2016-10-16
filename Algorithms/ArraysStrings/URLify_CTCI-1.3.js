// Replace all spaces with %20 and you are given the true length of the string
// Input: 'Mr John Smith    ', 13
// Output: 'Mr%20John%20Smith'

var URLify = function(url, count) {
	for (var i = 0; i < count; i++) {
		if (url[i] === ' ') {
			url[i] = '%20'
			count += 2
		}
	}
	return url
}

console.log(URLify('Mr John Smith    ', 13))