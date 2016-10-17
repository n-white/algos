// Given two trees, one large, and one small
// Find if the small tree is a subtree of the larger tree;

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

// Master function to iterate until we find matching root nodes to smaller tree
var isSubtree = function(larger, smaller) {

	// BASE CASE 1: Current Larger node is null
	if (larger === null) {
		return;
	}

	// BASE CASE 2: Smaller root value found in Larger tree
	if (larger.value === smaller.value) {
		var found = simultaneousDFS(larger, smaller);
		return found;
	}

	// RECURSIVE CASE: Continue search
	if (isSubtree(larger.left, smaller) || isSubtree(larger.right, smaller)) {
		return true;
	}	

	// BASE CASE 3: Smaller root value is never found so return false
	return false;
}

// Helper function to DFS through two trees at the same time
var simultaneousDFS = function(tree1, tree2) {
	// console.log('tree1', tree1);
	// console.log('tree2', tree2);

	// BASE CASE 1: Both are null
	if (tree1 === null && tree2 === null) {
		return true;
	}

	// BASE CASE 2: We found a node where either node is individually null or values are not equal
	if (tree1 === null || tree2 === null || tree1.value !== tree2.value) {
		return false;
	}

	// RECURSIVE CASE: Check the right and left side if current nodes are equal
	if (tree1.value === tree2.value) {
		if (simultaneousDFS(tree1.left, tree2.left) && simultaneousDFS(tree1.right, tree2.right)) {
			return true;
		}
	}
	
}

// LARGER TREE LOOKS LIKE THIS
//  	   5
//  	 /   \
// 	  2     8
//   / \   / \
//  1	  3 7   9
//       \     \
//        4     10

var smaller = new BinarySearchTree(8);
smaller.insert(9);
smaller.insert(7);
smaller.insert(10);

var larger = new BinarySearchTree(5);
larger.insert(2);
larger.insert(3);
larger.insert(1);
larger.insert(4);
larger.right = smaller;


console.log(isSubtree(larger, smaller))