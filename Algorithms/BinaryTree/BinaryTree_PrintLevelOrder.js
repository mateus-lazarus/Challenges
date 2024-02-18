function printLevelOrder(root) {
   var queue = [];
   queue.push(root);
   while (queue.length != 0) {
            
       // The shift() method removes 
       // the first element from an array 
       // and returns that removed element.
       var tempNode = queue.shift();
       console.log(tempNode.key + " ");
 
       // Enqueue left child
       if (tempNode.left != null) {
           queue.push(tempNode.left);
       }
 
       // Enqueue right child
       if (tempNode.right != null) {
           queue.push(tempNode.right);
       }
   }
 }