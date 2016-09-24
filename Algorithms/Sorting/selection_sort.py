# From Princeton algorithm course
# Basically this is bubble sort
# 

def selection_sort(list):
	length = len(list)
	for i in range(0, length):
		min = [list[i], i]
		for j in range(i + 1, length):
			if list[j] < min[0]:
				min = [list[j], j]
		# Change value of the min to i
		list[min[1]] = list[i]
		# Change value of i to min
		list[i] = min[0]
	return list

list1 = [5, 4, 3, 2, 1]

selection_sort(list1)
print list1

base_62_alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

def encode_base62(num, alphabet=base_62_alphabet):
	if num == 0:
		return alphabet[0]
	result = []
	base = len(alphabet)
	while num:
		# num is: num // 62 and rem is num % 62
		num, rem = divmod(num, base)
		# append the remainder and then continue the while loop until num is zero
		result.append(alphabet[rem])
	# then just reverse the results
	result.reverse()
	return ''.join(result)

print encode_base62(100)

def decode_base62(string, alphabet=base_62_alphabet):
	base = len(alphabet)
	string_length = len(string)
	num = 0
	index = 0
	for i in string:
		# Power is the index of the current character of the string (being looked up in reverse order)
		power = (string_length - (index + 1)) # 38
		# num is the index of that character in the base_62_alphabet times (62 ^ power)
		num += alphabet.index(i) * (base ** power)
		print 'i: ', i, 'alphabet.index(i): ', alphabet.index(i), 'base: ', base, 'power: ', power, 'num: ', num
		# increment index so that we can keep doing the reverse lookup until we get to the first character
		index += 1
	return num

# print base_62_alphabet.index('C') * (62 ** 1) # 2356
# print base_62_alphabet.index('1') * (62 ** 0) # 1

print decode_base62('1C')







