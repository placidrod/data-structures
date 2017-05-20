var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);

    if(list.head === null) {
      list.head = node;
      list.tail = node;
    }
    else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var temp = list.head.value;
    delete list.head.value;
    list.head = list.head.next;
    return temp;
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
// LinkedList = { 1: {value = val, next = nullj}, 2: {value = x, next = null}}

// list.head = {value = x, next = {value = y, next = {value = z, next = null}}}
// list.tail = {value = z, next = null}





