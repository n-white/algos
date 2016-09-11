def insertionSort(array):

	for i in range(1, len(array)):
		valObject = array[i]
		hole = i

		while hole > 0 and valObject['value'] < array[hole - 1]['value']:
			array[hole] = array[hole - 1]
			hole -= 1

		array[hole] = valObject


alist = [{'value': 5}, {'value': 2}, {'value': 3}, {'value': 1}]
insertionSort(alist)
