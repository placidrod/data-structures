var Queue = function() {
  var someInstance = {};

  var storage = {};
  var size = 0;
  var dequeuedKey = 0;
  var enqueueKey = 1;

  someInstance.enqueue = function(value) {
    storage[enqueueKey] = value;
    enqueueKey++;
    size++;
  };

  someInstance.dequeue = function() {
    if(size === 0) dequeuedKey = 0;
    dequeuedKey++;
    var dequeued = storage[dequeuedKey];
    delete storage[dequeued];
    size--;
    return dequeued;
  };

  someInstance.size = function() {
    return size < 0 ? 0 : size;
  };

  return someInstance;
};