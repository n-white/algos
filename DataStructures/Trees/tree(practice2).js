var Tree = function(value) {
	this.value = value;
	this.children = [];
}

Tree.prototype.addChild = function(value) {
	var newNode = new Tree(value);
	this.children.push(newNode);
}

Tree.prototype.depthFirstSearch = function(target) {

	// Base case 1: If target found
	if (this.value === target) {
		return true;
	}

	// Recursive case
	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i].depthFirstSearch(target)) {
			return true;
		};
	}
	return false;
}

Tree.prototype.breadthFirstSearch = function(target) {
	var queue = [this];
	while (queue.length) {
		for (var i = 0; i < queue.length; i++) {
			var current = queue.shift()
			console.log(current.value);
			if (current.value === target) { return true; }
			for (var j = 0; j < current.children.length; j++) {
				queue.push(current.children[i])
				i++
			}
		}
	}
	return false;
}

Tree.prototype.isDescendant = function(child) {
	// Base case
	if (this.children.indexOf(child) !== -1) {
		return true;
	}

	// Recursive case
	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i].isDescendant(child)) {
			return true;
		}
	}

	// If not found in base case or recursive case, return false
	return false
}

Tree.prototype.getAncestorPath = function(child, ancestors) {
	ancestors = ancestors || [this.value];
	
	// Base case: once we find the ultimate child, we return its value
	if (this.value === child.value) {
		ancestors.push(child.value)
		return ancestors
	}

	// Recursive case
	for (var i = 0; i < this.children.length; i++) {
		// Check if child is descendant of current ancestor
		if (this.children[i].isDescendant(child)) {
			// Add current ancestor to array
			ancestors.push(this.children[i].value)
			// Recurse on the current ancestor
			ancestors.concat(this.children[i].getAncestorPath(child, ancestors))
		}
	}

	return ancestors;
}


Tree.prototype.findCommonAncestor = function(child1, child2) {
	var child1Ancestors = this.getAncestorPath(child1);
	var child2Ancestors = this.getAncestorPath(child2);
	var minLength = Math.min(child1Ancestors.length, child2Ancestors.length);
	var closestAncestor = 'None'
	for (var i = 0; i < minLength; i++) {
		if (child1Ancestors[i] === child2Ancestors[i]) {
			closestAncestor = child1Ancestors[i];
		} else {
			break;
		}
	}
	return closestAncestor
}


// TREE LOOKS LIKE THIS:
//       1
//     /    \
//    2      3
// 	 / \    / \
//  4   5  6   7
// / \   \
//8   9  10

var test = new Tree(1);
test.addChild(2)
test.addChild(3);
test.children[0].addChild(4);
test.children[0].addChild(5);
test.children[1].addChild(6);
test.children[1].addChild(7);
var childNode8 = new Tree(8);
var childNode9 = new Tree(9);
var childNode10 = new Tree(10);
test.children[0].children[0].children.push(childNode8);
test.children[0].children[0].children.push(childNode9);
test.children[0].children[1].children.push(childNode10);

var notChildNode = new Tree(12);

// console.log(test.depthFirstSearch(7));
console.log(test.breadthFirstSearch(7));
// console.log(test.isDescendant(childNode8));
// console.log(test.isDescendant(notChildNode));
// console.log(test.getAncestorPath(childNode8));
// console.log(test.findCommonAncestor(childNode8, childNode10));

// console.log(test.isBalanced(test));