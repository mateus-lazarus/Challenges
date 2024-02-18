// https://www.codewars.com/kata/588534713472944a9e000029/javascript



 class Node {
	constructor(value, left = null, right = null){
	  this.value = value;
	  this.left = left;
	  this.right = right;
	}
 }
 



 function isBST(node) {
	const asc = node
	  ? node.left
		 ? node.left.value < node.value		// Caso falso, então estará invertido
		 : node.right
			? node.right.value > node.value	// Caso falso, então estará invertido
			: true
	  : true;

	return isValidBST(node, -Infinity, +Infinity, asc);
 }
 
 function isValidBST(node, min, max, asc) {	// Assim como o validador de BST 
	if (node) {
	  if (node.value > min && node.value < max) {
		 const [left, right] = asc ? [node.left, node.right] : [node.right, node.left];
		 
		 return isValidBST(left, min, node.value, asc) && isValidBST(right, node.value, max, asc);
	  }

	  else {
		 return false;
	  }
	}

	else {
	  return true;
	}
 }

 



 let exampleRoot = new Node(10);
 exampleRoot.left = new Node(8);
 exampleRoot.right = new Node(12);
 exampleRoot.right.right = new Node(15);

 
 console.log(isBST(exampleRoot));
