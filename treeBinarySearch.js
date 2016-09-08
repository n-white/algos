var BinarySearchTree = function(value) {
	this.value = value;
	this.right = null;
	this.left = null;
}

BinarySearchTree.prototype.insert = function(value) {
	if (value < this.value) {
		if (this.left === null) {
			this.left = new BinarySearchTree(value);
		} else {
			this.left.insert(value);
		}
	} else if (value > this.value) {
		if (this.right === null) {
			this.right = new BinarySearchTree(value);
		} else {
			this.right.insert(value);
		}
	}
}

BinarySearchTree.prototype.contains = function(value) {
	if (value === this.value) {
		return true;
	} else if (value > this.value) {
		return !!(this.right && this.right.contains(value));
	} else if (value < this.value) {
		return !!(this.left && this.left.contains(value));
	}
}

BinarySearchTree.prototype.breadthFirstLog = function() {
	var queue = [this];
	var repeat = true;

	while (repeat) {
		var repeat = false;
		for (var i = 0; i < queue.length; i++) {
			if (queue[i].left !== null) {
				queue.push(queue[i].left);
				queue[i].left = null;
				repeat = true;
			}
			if (queue[i].right !== null) {
				queue.push(queue[i].right);
				queue[i].right = null;
				repeat = true;
			}
		}
	}

	for (var i = 0; i < queue.length; i++) {
		console.log(queue[i].value);
	}
}

var test = new BinarySearchTree(5)
test.insert(2);
test.insert(1);
test.insert(3);
test.insert(7);
test.insert(6);
test.insert(8);
console.log(test.breadthFirstLog());



