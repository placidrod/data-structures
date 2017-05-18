var Queue = function() {
  var someInstance = {};

  var storage = {};
  var size = 0;
  var enqueueKey = 0;
  var dequeueKey = 0;

  someInstance.enqueue = function(value) {
    enqueueKey++;
    storage[enqueueKey] = value;
    size++;
  };

  someInstance.dequeue = function() {
    dequeueKey++;
    var dequeued = storage[dequeueKey];
    delete storage[dequeueKey];
    size--;
    return dequeued;
  };

  someInstance.size = function() {
    return size < 0 ? 0 : size;
  };

  return someInstance;
};