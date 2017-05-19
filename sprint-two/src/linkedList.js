var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var pointer = 0;
  var dqKey = 0;

  list.addToTail = function(value) {
    var node = Node(value);
    pointer++;
    list[pointer] = node;
    list.tail = list[pointer];
    if(list.head === null) {
      list.head = list[pointer];
    }
  };

  list.removeHead = function() {
    dqKey++;
    var temp = list[dqKey];
    delete list[dqKey];
    list.head = list[dqKey+1];
    return temp.value;
  };

  list.contains = function(target) {
    for(var key in list) {
      if(list[key].value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

