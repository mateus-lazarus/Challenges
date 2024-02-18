function maxSum(root) {
   if (root === null) {
      return 0
   }
   
   let {value, left, right} = root
   
   if (right === null) {
     return value + maxSum(left)
   }
   
   if (left === null) {
     return value + maxSum(right)
   }
   
   return value + Math.max(maxSum(left), maxSum(right))
 }









 class Node {
	constructor(val) {
		 this.value = val;
		 this.left = null;
		 this.right = null;
	}
 }



 let exampleRoot = new Node(1);
 exampleRoot.left = new Node(2);
 exampleRoot.right = new Node(3);

 exampleRoot.left.left = new Node(4);
 exampleRoot.left.right = new Node(5);

 exampleRoot.left.left.left = new Node(2550);
 exampleRoot.left.left.right = new Node(5);

 exampleRoot.right.left = new Node(6);
 exampleRoot.right.right = new Node(7);

 exampleRoot.right.right.left = new Node(14);
 exampleRoot.right.right.right = new Node(200);


 console.log(maxSum(exampleRoot));