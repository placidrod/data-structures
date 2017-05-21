var BinarySearchTree = function(value) {
  var newBST = {};
  newBST.value = value;
  newBST.left = {};
  newBST.right = {};
  _.extend(newBST, BSTmethods);
  return newBST;
};

var BSTmethods = {};

BSTmethods.insert = function(val) {
  if(val < this.value) {
    if(!this.left.value) {
      this.left = BinarySearchTree(val);
    }
    else {
      this.left.insert(val);
    }
  } else {
    if(!this.right.value) {
      this.right = BinarySearchTree(val);
    }
    else {
      this.right.insert(val);
    }
  }
};

//O(log n)

BSTmethods.contains = function(val) {
  var found = false;

  if(val === this.value) {
    found = true;
  } else if(val < this.value) {
    if(this.left.value) {
      return this.left.contains(val);
    }
  } else {
    if(this.right.value) {
      return this.right.contains(val);
    }
  }

  return found;
};

//O(log n)

BSTmethods.depthFirstLog = function(callback) {
  callback(this.value)
  if(this.left.value) {
    this.left.depthFirstLog(callback);
  }
  if(this.right.value) {
    this.right.depthFirstLog(callback);
  }
};

//O(n)


/*
 * Complexity: What is the time complexity of the above functions?
 */
