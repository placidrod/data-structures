var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.sizePar = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {

  push: function(val) {
    this.storage[this.sizePar+1] = val;
    this.sizePar++;
  },

  pop: function() {
    var temp = this.storage[this.sizePar];
    delete this.storage[this.sizePar];
    this.sizePar--;
    return temp;
  },

  size: function() {
    return this.sizePar < 0 ? 0 : this.sizePar;
  }
};
