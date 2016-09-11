var Tree = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

Tree.prototype.postOrderTraversal = function() {
	
}

var root = new Tree(1);
root.left = new Tree(2);
root.left.left = new Tree(4);
root.left.right = new Tree(5);
root.left.right.left = new Tree(6);
root.right = new Tree(3);
root.right.right = new Tree(7);
root.right.right.right = new Tree(8);

console.log(root);