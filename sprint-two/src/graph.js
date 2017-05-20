// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if(this.nodes.splice(this.nodes.indexOf(node), 1).length === 0) {
    return false;
  }
  else {
    for(var i = 0; i < this.edges.length; i++) {
      if((this.edges[i][0] === node) || (this.edges[i][1] === node) ) {
        this.edges.splice(i, 1);
      }
    }
    return true;
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  for(var i = 0; i < this.edges.length; i++) {
    if((this.edges[i][0] === fromNode && this.edges[i][1] === toNode) || (this.edges[i][0] === toNode && this.edges[i][1] === fromNode) ) {
      result = true;
    }
  }
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for(var i = 0; i < this.edges.length; i++) {
    if((this.edges[i][0] === fromNode && this.edges[i][1] === toNode) || (this.edges[i][0] === toNode && this.edges[i][1] === fromNode) ) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


