/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange){

  // Simple equality if string
  if (typeof apple === 'string' || typeof orange === 'string') {
    return apple === orange ? true : false;
  }

  // Simple equality if number
  if (typeof apple === 'number' || typeof orange === 'number') {
    return apple === orange ? true : false;
  }

  // If boolean
  if (typeof apple === 'boolean' || typeof orange === 'boolean') {
    return apple === orange ? true : false;
  }

  // If undefined
  if (typeof apple === undefined || typeof orange === undefined) {
    return apple === orange ? true : false;
  }

  // If null
  if (typeof apple === null || typeof orange === null) {
    return apple === orange ? true : false;
  }

  // The above checks on types could be avoided by the below two lines:
  // if(apple === orange) { return true; }
  // if(apple && !orange || !apple && orange) { return false; }


  // Check if apple and orange are objects, if not then you can return false
  if(!(apple instanceof Object) || !(orange instanceof Object)) { return false; }
  // Grab keys from both so that we can run arrays and objects through the same for loop
  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);
  // Shortcut: check that lengths are equal
  if (appleKeys.length !== orangeKeys.length) { return false; }
  // If objects are empty then you know your recursive work is done!
  if (appleKeys.length === 0) { return true; }

  // Start the for loop and recursive calls
  for (var i = 0; i < appleKeys.length; i++) {
    // Very important to check whether it's false and not true
    // ... because even if it's true, you still need to continue checking all the other keys
    if (!deepEquals(apple[appleKeys[i]], orange[orangeKeys[i]])) {
      return true;
    }
  }

  return false;

};

console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false

// THINGS I LEARNED
// (1) Instance of is similar to typeof but typeof is used for telling apart the different 'primitive types'
// So "typeof null" will give you an 'object'
// Whereas instanceof checks the constructor
// If you have a class of Person and create an instance of person called 'dave'
// then 'dave instance of Person' will return true
// 'dave instanceof Object' will also return true because Person.prototype is an object
// (2) Object.keys is an awesome way of making it so you can run arrays and objects through the same for loop
