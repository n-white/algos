var Tree = function(value) {
	this.value = value;
	this.children = [];
}

Tree.prototype.addChild = function(value) {
	if (this.children.indexOf(value) !== -1) {
		return;
	} else {
		var newNode = new Tree(value);
		this.children.push(newNode);
	}
}

Tree.prototype.removeChild = function(index) {
	this.children.splice(index, 1);
}

Tree.prototype.dfs = function() {
	console.log(this.value)
	if (this.children.length === 0) {
		return;
	}
	for (var i = 0; i < this.children.length; i++) {
		this.children[i].dfs();	
	}
}

Tree.prototype.getCommonAncestor = function(child1, child2) {
	var path1 = this.getAncestorPath(child1);
	var path2 = this.getAncestorPath(child2);

	var length = Math.min(path1.length, path2.length);
	var common = this.value;
	console.log(path1, path2)
	for (var i = 0; i < length; i++) {
		if (path1[i] !== path2[i]) {
			return common;
		}
		common = path1[i];
	}
	return common;

}

Tree.prototype.getAncestorPath = function(child, ancestors) {
	
	ancestors = ancestors || [];

	if (this.value === child) {
		ancestors.unshift(child);
		return ancestors;
	}

	for (var i = 0; i < this.children.length; i++) {
		if(this.children[i].getAncestorPath(child, ancestors)) {
			ancestors.unshift(this.value);
			return ancestors;
		}
	}

	return null;
}

Tree.prototype.isDescendant = function(child) {
	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i].value === child) {
			return true;
		}
	}

	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i].isDescendant(child)) {
			return true;
		}
	}
	return false;
}

var root = new Tree(1);
root.addChild(2);
root.addChild(3);
root.children[0].addChild(4);
root.children[0].addChild(5);
root.children[1].addChild(6);
root.children[1].addChild(7);

// root.dfs();
// console.log(root.isDescendant(8));
console.log(root.getCommonAncestor(2, 5));

