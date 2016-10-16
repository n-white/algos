// Traverse graph in order of dependencies

var Graph = function() {
  this.nodes = {};
};

var Node = function(value) {
  return { value: value, outgoingEdge: {}, incomingEdge: {}, visited: false }
}

Graph.prototype.addNode = function(node) {
  this.nodes[node.value] = node;
};

Graph.prototype.removeNode = function(node) {
  // Delete outgoing edges
  for (key in this.nodes[node].outgoingEdge) {
    delete this.nodes[key].incomingEdge[node];
  }
  // Delete incoming edges
  for (key in this.nodes[node].incomingEdge) {
    delete this.nodes[key].outgoingEdge[node];
  }
  // Then delete node
  delete this.nodes[node];
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode.value].outgoingEdge[toNode.value] = toNode;
  this.nodes[toNode.value].incomingEdge[fromNode.value] = fromNode;
}

Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode.value].outgoingEdge[toNode.value];
  delete this.nodes[toNode.value].incomingEdge[fromNode.value];
};

// Find if there is a route between nodes using BFS
var searchRoute = function(root, target) {
  var queue = [];
  var i = 0;
  // Initialize the queue
  queue.push(root);

  // While queue is full
  while (queue.length) {
    for (var i = 0; i < queue.length; i++) {
      var currentNode = queue.shift();
      // Keep cycling until you find a node that hasn't been checked already
      while (currentNode.visited === true) {
        console.log('node already visited: ', currentNode.value);
        currentNode = queue.shift()
      }
      console.log(currentNode.value);
      currentNode.visited = true;
      // Target found
      if (currentNode === target) { return true; }
      // Add each child to the queue
      for (key in currentNode.outgoingEdge) {
        // Nodes are pushed to queue to maintain order of children
        queue.push(currentNode.outgoingEdge[key])
        // Length of queue increments so we move the value of i up for each child
        // That way the for loop breaks before we get to the next level of children
        i++
      }
    }
  }

  // Target was never found
  return false;
}


var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(7);
var node8 = new Node(8);
var node9 = new Node(9);
var node10 = new Node(10);

var test = new Graph();
test.addNode(node1);
test.addNode(node2);
test.addNode(node3);
test.addNode(node4);
test.addNode(node5);
test.addNode(node6);
test.addNode(node7);
test.addNode(node8);
test.addNode(node9);
test.addNode(node10);


test.addEdge(node1, node2);
test.addEdge(node1, node3);
test.addEdge(node3, node4);
test.addEdge(node3, node5);
test.addEdge(node5, node6);
test.addEdge(node5, node7);
test.addEdge(node7, node8);
test.addEdge(node8, node9);
test.addEdge(node7, node10);

test.addEdge(node4, node1);

// Graph now looks like this:

// /-----1
// |    / \
// |   2   3
// |      / \
// \-----4   5
//         / \
//        6   7
//           / \
//          8  10
//         /     
//        9

console.log(searchRoute(test.nodes['1'], test.nodes['10']))

