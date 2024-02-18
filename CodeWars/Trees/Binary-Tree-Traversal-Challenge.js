 function preOrder(node) {
   let arrayItems = [];
 
   const preOrderRecursive = (node, array) => {
     array.push(node.data);
 
     if (node.left != null) {
       preOrderRecursive(node.left, array);
     }
 
     if (node.right != null) {
       preOrderRecursive(node.right, array);
     }
   };
 
   preOrderRecursive(node, arrayItems);
 
   return arrayItems;
 }
 
 
 
 function inOrder(node) {
   let arrayItems = [];
 
   const inOrderRecursive = (node, array) => {
     if (node.left != null) {
       inOrderRecursive(node.left, array);
     }
 
     array.push(node.data);
 
     if (node.right != null) {
       inOrderRecursive(node.right, array);
     }
   };
 
   inOrderRecursive(node, arrayItems);
 
   return arrayItems;
 }
 
 
 function postOrder(node) {
   let arrayItems = [];
 
   const postOrderRecursive = (node, array) => {
     if (node.left != null) {
       postOrderRecursive(node.left, array);
     }
 
     if (node.right != null) {
       postOrderRecursive(node.right, array);
     }
 
     array.push(node.data);
   };
 
   postOrderRecursive(node, arrayItems);
 
   return arrayItems;
 }