# Check if binary tree is balanced
# This balanced tree is defined as a tree where the heights of the two subtrees of any node don't differ by one

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

tree1 = create_tree(list1)

def is_balanced(tree):
	