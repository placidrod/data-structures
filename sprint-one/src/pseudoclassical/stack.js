var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizePar = 0;
  this.storage = {};
};

Stack.prototype.push = function(val) {
  this.sizePar++;
  this.storage[this.sizePar] = val;
};

Stack.prototype.pop = function() {
  var temp = this.storage[this.sizePar];
  delete this.storage[this.sizePar];
  this.sizePar--;
  return temp;
};

Stack.prototype.size = function() {
  return this.sizePar < 0 ? 0 : this.sizePar;
}