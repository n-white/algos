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

// METHOD 1: USING DFS
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

// METHOD 2: Pass down the min and max each time
// Assumption is that ALL node values on the left should be less than current node and greater than on the right side
BinarySearchTree.prototype.checkBST = function(min, max) {

	// BASE CASE 1: Check left side
	if (min !== null) {
		if (this.value > min) {
			return false;
		}
	}

	// BASE CASE 2: Check right side
	if (max !== null) {
		if (this.value < max) {
			return false;
		}
	}

	// RECURSIVE CASE: check left if not null
	if (this.left !== null) {
		if (!this.left.checkBST(this.value, null)) {
			return false;
		}
	}

	// RECURSIVE CASE: check right if not null
	if (this.right !== null) {
		if (!this.right.checkBST(null, this.value)) {
			return false;
		}
	}

	// If no exceptions found, return true
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

// Check BST using method one (depth first search)
console.log('should be true: ', test.isBST());
console.log('should be false: ', not_BST_on_left.isBST());
console.log('should be false: ', not_BST_on_right.isBST());

// Check BST using method two (checking vs each min and max value, but this is also DFS)
console.log('should be true: ', test.checkBST());
console.log('should be false: ', not_BST_on_left.checkBST());
console.log('should be false: ', not_BST_on_right.checkBST());


// LESSONS LEARNED
// Best time complexity is O(N) since any algorithm must touch all nodes
// Due to the use of recursion, the space complexity is O(Log N) because there are up to O(Log N) recursive calls ...
// ... on the stack since we may recurse up the depth of the tree