/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {

  var storage = [];
  var length = 0;

  // add an item to the top of the stack
  this.push = function(value){
    storage[length++] = value;
  };

  // remove an item from the top of the stack
  this.pop = function(){
    var lastItem = storage[length - 1];
    storage.splice(length--, 1);
    return lastItem;
  };

  // return the number of items in the stack
  this.size = function(){
    return length;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(value){
    // TODO: implement `enqueue`
    inbox.push(value);
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
    var inboxSize = inbox.size();
    for (var i = 0; i < inboxSize; i++) {
      outbox.push(inbox.pop());
    }
    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
    return inbox.size() + outbox.size();
  };
};

var test = new Queue();
test.enqueue(1);
test.enqueue(2);
test.enqueue(3);
console.log(test.dequeue());
console.log(test.dequeue());
test.enqueue(4)
console.log(test.dequeue());
console.log(test.size());

