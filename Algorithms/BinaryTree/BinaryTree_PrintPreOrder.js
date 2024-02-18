function printPreorder(node) {
   if (node == null)
       return;
 
   // First print data of node
   console.log(node.key + " ");
 
   // Then recur on left subtree
   printPreorder(node.left);
 
   // Now recur on right subtree
   printPreorder(node.right);
 }