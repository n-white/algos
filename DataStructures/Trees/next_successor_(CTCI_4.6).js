// Find the next successor node in a binary search tree of a given node

var BinarySearchTree = function(value) {
	this.value = value;
	this.right = null;
	this.left = null;
}

BinarySearchTree.prototype.insert = function(value) {
	// If greater, move right
	if (value > this.value) {
		// First check if null
		if (this.right === null) {
			this.right = new BinarySearchTree(value)
		} else {
			this.right.insert(value);
		}
	}
	// If less than, move left
	if (value < this.value) {
		if (this.left === null) {
			this.left = new BinarySearchTree(value);
		} else {
			this.left.insert(value);
		}
	}
}

const findSuccessor = function(root) {
	// First check if there is even a successor to the right
	if (root.right === null) {
		return 'no successor';
	}

	const recursiveHelper = function(root) {
		// BASE CASE: If current node has no more left leaf then return itself
		if (root.left === null) {
			return root.value;
		}
		// RECURSIVE CASE
		return recursiveHelper(root.left);
	}

	// Kick off the recursive helper
	return recursiveHelper(root.right)
}



var test = new BinarySearchTree(4);
test.insert(9);
test.insert(8);
test.insert(7);
test.insert(6);

console.log(findSuccessor(test));

// LESSONS LEARNED
