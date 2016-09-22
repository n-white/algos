# CTCI 1.1

# Check if a string has all unique characters with additional data structure
def unique_w_cache(string):
	cache = {}
	for i in string:
		if i in cache:
			return False
		else:
			cache[i] = None
	return True

# Check if a string has all unique characters without additional data structure
def unique_no_cache(string):
	for i in range(len(string)):
		for j in range(i + 1, len(string)):
			if string[i] == string[j]:
				return False
	return True

clean_string = '1234567'
dupe_string = 'abcc'

print 'should be true: ', unique_w_cache(clean_string)
print 'should be true: ', unique_no_cache(clean_string)

print 'should be false: ', unique_w_cache(dupe_string)
print 'should be false: ', unique_no_cache(dupe_string)

