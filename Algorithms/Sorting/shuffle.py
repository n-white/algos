# Princeton algo course
# Linear time

import random

def shuffle(alist):
	# Iterate through all positions of alist
	for i in range(1, len(alist)):
		# Generate a random number between 0 and i
		random_index = random.randrange(0, i)
		# Swap the values of random number and i
		temp = alist[i]
		alist[i] = alist[random_index]
		alist[random_index] = temp
	return alist

print shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])