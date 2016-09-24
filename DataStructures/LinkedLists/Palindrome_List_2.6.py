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

	def add_to_tail(self, value):
		new_node = Node(value)
		if self.head == None:
			self.head = new_node
			self.tail = new_node
		else:
			self.tail.next = new_node
			new_node.prev = self.tail
			self.tail = new_node

	def contains(self, value):
		current_node = self.head
		while current_node != None:
			if current_node.value == value:
				return current_node
			current_node = current_node.next
		return False

	def remove(self, current_node):
		current_node.prev.next = current_node.next
		current_node.next.prev = current_node.prev

	def print_nodes(self):
		current_node = self.head
		list_values = []
		while current_node != None:
			list_values.append(current_node.value)
			current_node = current_node.next
		print list_values

	# THIS WAS MY SOLUTION TO CREATE A QUEUE AND STACK AND CHECK FOR EQUALITY
	# THIS WOULDN'T WORK FOR JS
	def is_palindrome(self):
		queue = []
		stack = []
		current_node = self.head
		while current_node != None:
			queue.insert(0, current_node.value)
			stack.append(current_node.value)
			current_node = current_node.next
		return queue == stack

	# CTCI SOLUTION #1:
	# CREATE A STACK AND THEN LOOK THROUGH FIRST HALF THEN COMPARE TO SECOND HALF
	# Linear time complexity but not constant space
	def is_palindrome_stack(self):
		current_node = self.head
		stack = []
		fast_runner = self.head
		while fast_runner.next != None:
			print current_node.value
			# Add to the end of the stack
			stack.append(current_node.value)
			# Increment the fast_runner at 2X speed
			fast_runner = fast_runner.next.next
			# Increment the current_node at 1X speed
			current_node = current_node.next
		# Append the middle node
		stack.append(current_node.value)
		# When we reach the middle, start checking if palindrome
		while current_node != None:
			print current_node.value, stack
			# Pop top of stack and compare
			if stack.pop() != current_node.value:
				# Break out of the function
				return False
			else:
				# Increment the current node by one
				current_node = current_node.next
		return True

list1 = LinkedList()
list1.add_to_tail(1)
list1.add_to_tail(2)
list1.add_to_tail(3)
list1.add_to_tail(2)
list1.add_to_tail(1)

print list1.is_palindrome_stack()