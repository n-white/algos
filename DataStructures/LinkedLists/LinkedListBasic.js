var LinkedList = function() {
	var list = {}
	list.head = null
	list.tail = null

	// Add to tail
	list.addToTail = function(value) {
		// Create a new node instance
		var newNode = new Node(value)
		// Check if head exists
		if (!list.head) {
			list.head = newNode;
			list.tail = newNode;
		} else {
		// If head exists then we can just add to tail	
			list.tail.next = newNode;
			list.tail = newNode;
		}
	}

	// Remove head
	list.removeHead = function() {
		// If head is null, do nothing
		if (list.head === null) {
			return 'No head exists'
		}

		list.head = list.head.next;

	}

	// Contains
	list.contains = function(value) {
		var currentNode = list.head;
		// Iterate through the linked list checking the values
		while (currentNode) {
			if (currentNode.value === value) {
				return true;
			}
			currentNode = currentNode.next;
		}
		return false;
	}

	return list;
}

var Node = function(value) {
	var node = {};

	node.value = value;
	node.next = null;

	return node;
}

var testList = new LinkedList();
testList.addToTail(1);
testList.addToTail(2);
testList.addToTail(3);
console.log(testList.contains(3));
testList.removeHead();
console.log(testList);