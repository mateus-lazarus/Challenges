function printPostorder(node) {
   if (node == null)
       return;
 
   // First recur on left subtree
   printPostorder(node.left);
 
   // Then recur on right subtree
   printPostorder(node.right);
 
   // Now deal with the node
   console.log(node.key + " ");
 }