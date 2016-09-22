# Check if two strings are just permutations of each other

# BETTER SOLUTION IS TO SPLIT STRING TO LIST, SORT IT THEN CHECK string1[i] vs string2[i]

def contains(character, string):
	for i in range(0, len(string)):
		if character == string[i]:
			return True
	return False

def perm_check(string1, string2):
	if len(string1) != len(string2):
		return False

	length = len(string1)

	for i in range(0, length):
		if contains(string1[i], string2) == False:
			return False

	return True


text1 = 'abc'
text2 = 'cba'
text3 = 'abcd'

print 'should be true: ', perm_check(text1, text2)
print 'should be false: ', perm_check(text1, text3)
