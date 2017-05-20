var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};
//complexity: O(1)

setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};
//complexity: O(1)

setPrototype.remove = function(item) {
  delete this._storage[item];
};
//complexity: O(1)

/*
 * Complexity: What is the time complexity of the above functions?
 */
