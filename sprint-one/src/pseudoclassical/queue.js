var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizePar = 0;
  this.enqueueKey = 0;
  this.dequeueKey = 0;
};

Queue.prototype.enqueue = function(val) {
  this.enqueueKey++;
  this.storage[this.enqueueKey] = val;
  this.sizePar++;
};

Queue.prototype.dequeue = function() {
  this.dequeueKey++;
  var temp = this.storage[this.dequeueKey];
  delete this.storage[this.dequeueKey];
  this.sizePar--;
  return temp;
};

Queue.prototype.size = function() {
  return this.sizePar < 0 ? 0 : this.sizePar;
};

