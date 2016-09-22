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

	# CTCI: 2.1, pg: 94 (using a cache)
	def remove_dups(self):
		cache = {}
		current_node = self.head
		while current_node != None:
			if str(current_node.value) in cache:
				if current_node.next == None:
					current_node.prev.next = current_node.next
				else:
					current_node.prev.next = current_node.next
					current_node.next.prev = current_node.prev
			else:
				new_key = str(current_node.value)
				cache[new_key] = True
			current_node = current_node.next



testList = LinkedList()
testList.add_to_tail(1)
testList.add_to_tail(2)
testList.add_to_tail(3)
testList.add_to_tail(4)
testList.add_to_tail(5)
testList.remove(testList.contains(3))
print 'after removal of 3: ', testList.print_nodes()

testList.add_to_tail(5)
testList.add_to_tail(6)
testList.add_to_tail(6)
testList.add_to_tail(7)
testList.add_to_tail(9)
testList.add_to_tail(9)
print 'before duplicate removal: ', testList.print_nodes()
testList.remove_dups()
print 'after duplicate removal: ', testList.print_nodes()
