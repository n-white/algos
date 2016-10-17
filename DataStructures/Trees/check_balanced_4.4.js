// Check if binary tree is balanced
// This balanced tree is defined as a tree where the heights of the two subtrees of any node don't differ by one

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

// We use two functions to check if balanced
// This function checks max height of left side and right side

const getHeight = function(root) {
	if (root === null) {
		return -1;
	}
	return Math.max(getHeight(root.left), getHeight(root.right)) + 1
}

const isBalanced = function(root) {

	// BASE CASE: Each branch is uneven
	if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
		return false;
	}

	// RECURSIVE CASE: check all nodes with DFS
	// Check left node first
	if (root.left !== null) {
		if (!isBalanced(root.left)) {
			return false;
		}
	}
	// Check right node after left node is checked	
	if (root.right !== null) {
		if (!isBalanced(root.right)) {
			return false;
		}
	}

	// If no imbalanced found, return true
	return true;
}


var test = new BinarySearchTree(5);
test.insert(2);
test.insert(3);
test.insert(1);
test.insert(8);
test.insert(9);
test.insert(7);
test.insert(4);
test.insert(10);

console.log('should be true: ', isBalanced(test));

test.insert(11);

console.log('should be false: ', isBalanced(test));

// LESSONS LEARNED
// Dont be afraid to use helpful functions that are test something recursively