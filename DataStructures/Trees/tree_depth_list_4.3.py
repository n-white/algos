# Input: given an sorted, increasing array of unique integer elements
# Output: write an algo that will create a binary search tree with minimal height

import math

class Tree:
	def __init__(self, value=None, left=None, right=None):
		self.value = value
		self.left = left
		self.right = right

list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

def create_tree(list):
	# Base case: no length of list
	if len(list) == 1:
		return Tree(list[0])
	if len(list) == 0:
		return None
	# Find midpoint of list
	midpoint = int(math.floor(len(list) / 2))
	# Create new head node value
	new_tree_node = Tree(list[midpoint])
	# Recursive case to the left
	# print 'midpoint: ', list[midpoint], 'list: ', 'left list: ', list[:midpoint], 'right list: ', list[midpoint+1:]
	new_tree_node.left = create_tree(list[:midpoint])
	# Recursive case to the right
	new_tree_node.right = create_tree(list[midpoint+1:])

	return new_tree_node


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


# Function to convert tree to series of linked lists
def tree_list(tree):

	result_list = []

	def recursive_creation(tree_node, depth):

		# Base case: child node is None value
		if tree_node == None:
			print 'base case reached'
			return
		
		# Create linked list or add to an existing one
		if len(result_list) - 1 < depth:
			print 'new list ', tree_node.value
			result_list.append([tree_node.value])
		else:
			print 'add to list ', tree_node.value
			result_list[depth].append(tree_node.value)

		depth = depth + 1

		# Recursive case to the left
		recursive_creation(tree_node.left, depth)
		# Recursive case to the right
		recursive_creation(tree_node.right, depth)

		depth = depth - 1

	recursive_creation(tree, 0)

	return result_list


tree1 = create_tree(list1)
list_of_lists = tree_list(tree1)
print list_of_lists

# LOGIC WORKS CORRECTLY BUT CAN'T FIGURE OUT HOW TO GET AN ACTUAL LINKED LIST TO ADD AT EACH INDEX VALUE
# PROBLEM IS THAT WHEN YOU ADD A LINKED LIST IN A DICTIONARY OR LIST THEN YOU CAN'T CALL THE METHODS ON IT FOR SOME REASON



