var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {

  var result = false;

  function searchTree(tree, target) {
    for(var i = 0; i < tree.children.length; i++) {
      if(target === tree.children[i].value) {
        result = true;
      }
    }
    if(tree.children.length > 0) {
      tree.children.forEach(function(child) {
        searchTree(child, target);
      });
    }
  }
  searchTree(this, target);
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 //
