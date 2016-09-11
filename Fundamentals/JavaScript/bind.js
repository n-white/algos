/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/


var bind = function(func, context) {

	// Grab all the arguments that come after the function and context
	var prev_args = Array.prototype.slice.call(arguments, 2);

	// Then return an inner anonymous function that can access all arguments and
	// ... run them through the function
	return function() {
		var args = Array.prototype.slice.call(arguments);
		args = prev_args.concat(args);
		// Run all arguments through the function with the context given
		return func.apply(context, args);

	}

};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function() {
  // This is the same as above except the function isn't an argument
  var prev_args = Array.prototype.slice.call(arguments, 1);
  var func = this;

  return function(){
    var args = Array.prototype.slice.call(arguments);
    args = prev_args.concat(args);

    return func.apply(context, args);
  }
};