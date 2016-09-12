// FUNCTIONAL

var Queue = function() {
	var someInstance = {}
	var storage = [];

	someInstance.push = function(value) {
		storage.push(value);
	}

	return someInstance;
}

// FUNCTIONAL SHARED

var Queue = function() {
	var someInstance = {}
	_(someInstance).extend(queueMethods)
	
	someInstance.storage = []
	
	return someInstance;
}

var queueMethods = {}

methods.add = function(value) {
	this.storage.push(value)
}

// PROTOTYPAL

var Queue = function() {
	var someInstance = Object.create(queueMethods)
	someInstance.storage = []
	return someInstance;
}

var queueMethods = {}

queueMethods.push = function(value) {
	this.storage.push(value)
}

// PSUEDOCLASSICAL

var Queue = function() {
	this.storage = []
}

Queue.prototype.push = function(value) {
	this.storage.push(value)
}
