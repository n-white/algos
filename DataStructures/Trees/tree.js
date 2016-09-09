var tree = function(value) {
	this.value = value;
	this.children = [];
}

tree.prototype.addChild = function(value) {
	var newChild = new tree(value);
	this.children.push(newChild);
}

tree.prototype.contains = function(value) {
	if (value === this.value) {
		return true;
	}
	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i].contains(value)) {
			return true;
		}

	}
	return false;
}

tree.prototype.traverse = function(callback) {
	callback(this.value);

	for (var i = 0; i < this.children.length; i++) {
		this.children[i].traverse(callback);
	}
	return;
}

var test = new tree(5);
test.addChild(6);
test.addChild(7);
test.addChild(8);
console.log(test.traverse(function(value) {
	console.log(value + 1);
}));
