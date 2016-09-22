# From Princeton algorithm course

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

