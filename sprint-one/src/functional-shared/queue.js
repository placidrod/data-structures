var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.sizePar = 0;
  someInstance.enqueueKey = 0;
  someInstance.dequeueKey = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(val) {
    this.enqueueKey++;
    this.storage[this.enqueueKey] = val;
    this.sizePar++;
  },
  dequeue: function() {
    this.dequeueKey++;
    var temp = this.storage[this.dequeueKey];
    delete this.storage[this.dequeueKey];
    this.sizePar--;
    return temp;
  },
  size: function() {
    return this.sizePar < 0 ? 0 : this.sizePar;
  }
};


