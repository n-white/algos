# Given two singly linked lists, find if the two lists intersect by reference
# Return the intersecting node

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

