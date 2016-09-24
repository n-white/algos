# Given two linked lists that contain digits in reverse order
# Output the sum of the two lists in a list form
# Input: (7->1->6) + (5->9->2) = 617 + 295 = 912
# Output: (2->1->9)

class Node:
	def __init__(self, value=None, next=None):
		self.value = value
		self.next = next
	def __str__(self):
		return str(self.value)

class List:
	def __init__(self, head=None, tail=None):
		self.head = head
		self.tail = tail

	def add_node(self, value):
		new_node = Node(value)
		if self.head == None:
			self.head = new_node
			self.tail = new_node
		else:
			self.tail.next = new_node
			self.tail = new_node

	def print_nodes(self):
		temp_list = []
		current_node = self.head
		while current_node != None:
			temp_list.append(current_node.value)
			current_node = current_node.next
		return temp_list

def combine_lists(list1, list2):
	current_list1 = list1.head
	current_list2 = list2.head
	carry_value = 0
	new_list = List()
	while current_list1 != None and current_list2 != None:
		# First sum values
		summed_value = current_list1.value + current_list2.value
		# Test if there is a carried value from the last while loop iteration
		if carry_value == 1:
			# Add one the sum
			summed_value += 1
			# Set carry value back to 0
			carry_value = 0
		# If the summed value goes over 10, then you need to carry 1 to next iteration
		if summed_value > 10:
			# Set carry value to 1 (to be added on next iteration)
			carry_value = 1
			# Set summed value to be 10 less
			summed_value -= 10
		new_list.add_node(summed_value)
		current_list1 = current_list1.next
		current_list2 = current_list2.next
	# After while loop completes, we need to test for remaining values if list lengths were uneven
	while current_list1 != None:
		new_list.add_node(current_list1.value)
		current_list1 = current_list1.next
	while current_list2 != None:
		new_list.add_node(current_list2.value)
		current_list2 = current_list2.next
	return new_list

list1 = List()
list1.add_node(7)
list1.add_node(1)
list1.add_node(6)

list2 = List()
list2.add_node(5)
list2.add_node(9)
list2.add_node(2)

list3 = combine_lists(list1, list2)
print list3.print_nodes()

