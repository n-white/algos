// Rotate a matrix by 90 degrees

// Solution that requires O(N) memory
var rotateMatrix = function(matrix) {
	var newMatrix = [];
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			newMatrix[j] = newMatrix[j] || [];
			newMatrix[j].unshift(matrix[i][j]);
		}
	}
	return newMatrix
}

// Solution witout O(N) memory by swapping values
// THIS CAN ONLY BE DONE FOR AN NXN MATRIX
var rotateEvenMatrix = function(matrix) {
	if (matrix.length === 0 || matrix[0].length !== matrix.length) { return false; }

	// Iterate through each layer, starting with the outer most edges of matrix
	var n = matrix.length;
	for (var layer = 0; layer < n / 2; layer++) {
		// Start with first layer
		var first = layer;
		// End with last in the layer
		var last = n - 1 - layer;
		for (var i = first; i < last; i++) {
			var offset = i - first;
			var top = matrix[first][i];
			// left -> top
			matrix[first][i] = matrix[last-offset][first];
			// bottom -> left
			matrix[last-offset][first] = matrix[last][last-offset];
			// right -> bottom
			matrix[last][last-offset] = matrix[i][last];
			// top -> right
			matrix[i][last] = top;
		}
	}
	return matrix;
}

var test = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]];
var nXn = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];


// console.log(rotateMatrix(test))
console.log(rotateEvenMatrix(nXn));