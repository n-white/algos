/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  result.insert = function(key, value){
    var index = getIndexBelowMaxForKey(value, storageLimit)

    storage[index] = storage[index] || [];

    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        storage[index][i][1] = value;
        return;
      }
    }

    storage[index].push([key, value]);
    size++;

    if (size > .75 * storageLimit) {
      storageLimit *= 2;
      var temp = []
      for (var i = 0; i < storage.length; i++) {
        for (var j = 0; j < storage[i].length; j++) {
          temp.push(storage[i].pop());
        }
      }
      for (var i = 0; i < temp.length; i++) {
        this.insert(temp[i][0], temp[i][1])
      }
    }

  };

  result.retrieve = function(key, value){
    var index = getIndexBelowMaxForKey(value, storageLimit)

    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        return value;
      }
    }

  };

  result.remove = function(key, value){
    var index = getIndexBelowMaxForKey(value, storageLimit)

    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        storage[index][i].splice(1, 1)
        size--
      }
    }

  };


  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};