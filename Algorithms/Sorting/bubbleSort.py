def swap(index1, index2, array):
	temp = array[index1]
	array[index1] = array[index2]
	array[index2] = temp
	return array

def bubble_sort(array):
	length = len(array)

	for i in range(length):
		swaps = 0

		for n in range(length - 1 - i):
			if array[n] > array[n+1]:
				swap(n, n+1, array)
				swaps += 1

		if swaps == 0:
			break

alist = [5, 4, 3, 2, 1]
bubble_sort(alist)
print alist
