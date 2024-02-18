 class Node {
	constructor(value, left = null, right = null){
	  this.value = value;
	  this.left = left;
	  this.right = right;
	}
 }

 function isValidBST(root) {
	// Auxiliary function to validate BST with range
	function validate(node, min, max) {
	  if (node === null) {
		 return true;
	  }
 
	  // Check if the current node's value is within the valid range
	  if (node.value <= min || node.value >= max) {
		 return false;
	  }
 
	  // Recursively validate the left and right subtrees
	  return validate(node.left, min, node.value) && validate(node.right, node.value, max);
	}
 
	// Start validation with the root node and the full range
	return validate(root, -Infinity, Infinity);
 }





 let exampleRoot = new Node(10);
 exampleRoot.left = new Node(8);
 exampleRoot.right = new Node(12);
 exampleRoot.right.right = new Node(15);

 
 console.log(isValidBST(exampleRoot));