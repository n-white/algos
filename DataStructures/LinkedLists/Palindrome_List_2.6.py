# Test if a linked list is a palindrome

class Node:
	def __init__(self, value=None, prev=None, next=None):
		self.value = value
		self.next  = next
		self.prev = prev

	def __str__(self):
		return str(self.value)

class LinkedList:
	def __init__(self, head=None, tail=None):
		self.head = head
		self.tail = tail

	# Added this function for adding nodes
	def add_node_tail(self, new_node):
		if self.head == None:
			self.head = new_node
			self.tail = new_node
		else:
			self.tail.next = new_node
			new_node.prev = self.tail
			self.tail = new_node

	def print_nodes(self):
		current_node = self.head
		list_values = []
		while current_node != None:
			list_values.append(current_node.value)
			current_node = current_node.next
		print list_values

n1 = Node(1)
n2 = Node(2)
n3 = Node(3)
n4 = Node(4)
n5 = Node(5)
n6 = Node(6)

list1 = LinkedList()
list1.add_node_tail(n1)
list1.add_node_tail(n2)
list1.add_node_tail(n3)
list1.add_node_tail(n4)
list1.add_node_tail(n5)
list1.add_node_tail(n6)

list2 = LinkedList()
list2.add_node_tail(n4)
list2.add_node_tail(n3)

list3 = LinkedList()
list3.add_node_tail(n5)
list3.add_node_tail(n6)

# Checking intersection using quadratic time
def check_intersection(list1, list2):
	current_list1 = list1.head
	# Loop through each node in list1
	while current_list1 != None:
		current_list2 = list2.head
		# Check that node against every node in list2 until you find matching nodes
		while current_list2 != None:
			if current_list1 == current_list2:
				return current_list1
			current_list2 = current_list2.next
		current_list1 = current_list1.next
	return False

# CTCI approach: using 3X-ish linear time
def is_intersecting(list1, list2):
	current_list1 = list1.head
	current_list2 = list2.head
	list1_length = 0
	list2_length = 0

	# Check if tails are the same linearly and store lengths
	# Iterate through list1 until you find tail
	while current_list1.next != None:
		list1_length += 1
		current_list1 = current_list1.next
	# Iterate through list2 until you find tail
	while current_list2.next != None:
		list2_length += 1
		current_list2 = current_list2.next
	print list2_length
	# If tails are not the same, return false
	if current_list1 != current_list2:
		return False

	# Now we know the intersect, so advance pointer of the larger list to get them equal length
	# Reset the pointers to the heads
	current_list1 = list1.head
	current_list2 = list2.head
	if list1_length > list2_length:
		for i in range (list1_length - list2_length):
			current_list1 = current_list1.next	
	elif list2_length > list1_length:
		for i in range (list2_length - list1_length):
			current_list2 = current_list2.next

	print current_list1, current_list2
	# List lengths are now the same
	# Iterate both lists at the same time until you reach the intersecting node
	while current_list1 != current_list2:
		if current_list1 == current_list2:
			return current_list1
		current_list1 = current_list1.next
		current_list2 = current_list2.next

# print is_intersecting(list1, list2) # True
# print check_intersection(list1, list3) # False
