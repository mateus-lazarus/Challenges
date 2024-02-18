// return the sum of all values in the tree, including the root
function sumTheTreeValues(root){
   if (root === null) {
     return 0;
   }
   
   if (root.left === null && root.riight === null) {
     return root.value;
   }
   
   let sum = 0;
   
   const traversalThroughTreeRecursion = (node, totalSum) => {
     sum += node.value;
     
     if (node.left !== null) {
       traversalThroughTreeRecursion(node.left);
     }
     
     if (node.right !== null) {
       traversalThroughTreeRecursion(node.right);
     }
   }
   
   traversalThroughTreeRecursion(root, sum);
   
   return sum;
 }