// Traverse graph in order of dependencies

var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(node) {
  this.nodes[node] = this.nodes[node] || { outgoingEdge: {}, incomingEdge: {} }
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
  this.nodes[fromNode].outgoingEdge[toNode];
  this.nodes[toNode].incomingEdge[fromNode];
}

Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode].outgoingEdge[toNode];
  delete this.nodes[toNode].incomingEdge[fromNode];
};

