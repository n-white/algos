// CTCI problem to test if tree is a BST tree

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

BinarySearchTree.prototype.contains = function(value) {

	// Base case 1: if leaf value is value
	if (this.value === value) {
		return true;
	}
	// Depth first search left node if not null
	if (this.left !== null) {
		if (this.left.contains(value)) {
			return true;
		}
	}
	// Depth first search right node if not null
	if (this.right !== null) {
		if (this.right.contains(value)) {
			return true;
		}
	}
	// If not found anywhere, return false;
	return false;
}

// CTCI problem to test if tree is a BST tree
BinarySearchTree.prototype.isBST = function() {
	
	// If left side is not null to avoid errors
	if (this.left !== null) {
		// If greater than current value, return false (BASE CASE)
		if (this.left.value > this.value) {
			return false;
		}
		// If not, then recurse on left side 
		else {
			if (!this.left.isBST()) {
				return false;
			}
		}
	}

	// If right side is not null to avoid errors
	if (this.right !== null) {
		// If less than current value, return false (BASE CASE)
		if (this.right.value < this.value) {
			return false;
		}
		// If not, then recurse on right side 
		else {
			if (!this.right.isBST()) {
				return false;
			}
		}
	}

	// No bad cases were found so far so return true
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

var not_BST_on_left = new BinarySearchTree(5);
not_BST_on_left.left = new BinarySearchTree(3);
not_BST_on_left.left.left = new BinarySearchTree(2);
not_BST_on_left.left.right = new BinarySearchTree(1);

var not_BST_on_right = new BinarySearchTree(5);
not_BST_on_right.right = new BinarySearchTree(6);
not_BST_on_right.right.left = new BinarySearchTree(7);
not_BST_on_right.right.right = new BinarySearchTree(8);

console.log('should be true: ', test.contains(3))
console.log('should be true: ', test.isBST());
console.log('should be false: ', not_BST_on_left.isBST());
console.log('should be false: ', not_BST_on_right.isBST());