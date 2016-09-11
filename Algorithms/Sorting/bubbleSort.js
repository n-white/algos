/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency
var i;

// This is necessary because we return the entire array
var swap = function(index1, index2, array) {
	var temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp
	return array;
}

var bubbleSort = function(array) {
  var len = array.length;

  // Do an outter for loop so that you look through the array i number of times
  // Only i number of times will be necessary in the worst case scenario
  // ... because the worst case scenario is O(n^2)
  // ... if we have an array like [5, 1, 2, 3, 4] then we would have to run the
  // ... outter for loop 5 times and inner for loop 5*5 times
  for (var i = 0; i < len; i++) {
  	// Swaps variable set back to zero each time
  	var swaps = 0

    // Do j < len - 1 - i iterations so we don't consider the final (sorted)
    // element in the array in future iterations
    // Uncomment line 65-67 if you want to see why!!!!
    // (it's because bubble sort moves the largest one all the way to the right each time) 	
	  for (var n = 0; n < len - 1; n++) {
	  	if (array[n] > array[n+1]) {
	  		// I DON'T GET WHY WE DON'T HAVE TO REASSIGN ARRAY HERE? ( ARRAY = SWAP(N, N+1, ARRAY) )
	  		swap(n, n+1, array)
	  		console.log(array, n + 1)
	  		swaps++
	  	} 
	  	// else {
		  // 	console.log("nothing done", n+1)
	  	// }
	  }
	  // If no swaps were made, we know we can exit 
	  // ... that way we can avoid O(n^2) in some cases
	  if ( !swaps ) { break; }
	}

	return array;
};

console.log(bubbleSort([5, 4, 3, 2, 1]))