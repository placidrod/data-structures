var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size+1] = value;
    size++;
  };

  someInstance.pop = function() {
    var popped = storage[size];
    delete storage[size];
    size--;
    return popped;
  };

  someInstance.size = function() {
    return size < 0 ? 0 : size;
  };

  return someInstance;
};