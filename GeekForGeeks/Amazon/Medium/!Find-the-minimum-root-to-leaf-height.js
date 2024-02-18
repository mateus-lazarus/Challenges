// https://www.geeksforgeeks.org/find-minimum-depth-of-a-binary-tree/


// Approach 1

/* javascript implementation to find minimum depth
   of a given Binary tree */
 
/* Class containing left and right child of current
node and key value*/
class Node {
   constructor(item) {
       this.data = item;
       this.left = this.right = null;
   }
}
   // Root of the Binary Tree
   let root;

   function minimumDepth() {
       return minimumDepth(root);
   }

   /* Function to calculate the minimum depth of the tree */
   function minimumDepth( root) {
       // Corner case. Should never be hit unless the code is
       // called on root = NULL
       if (root == null)
           return 0;

       // Base case : Leaf Node. This accounts for height = 1.
       if (root.left == null && root.right == null)
           return 1;

       // If left subtree is NULL, recur for right subtree
       if (root.left == null)
           return minimumDepth(root.right) + 1;

       // If right subtree is NULL, recur for left subtree
       if (root.right == null)
           return minimumDepth(root.left) + 1;

       return Math.min(minimumDepth(root.left), minimumDepth(root.right)) + 1;
   }

   /* Driver program to test above functions */
    
        
       root = new Node(1);
       root.left = new Node(2);
       root.right = new Node(3);
       root.left.left = new Node(4);
       root.left.right = new Node(5);

       document.write("The minimum depth of "
       + "binary tree is : " + minimumDepth(root));


// This code contributed by aashish1995 






// Approach 2

// Javascript program to find minimum depth
// of a given Binary Tree
class Node
{
     
    // Utility function to create a new tree Node
    constructor(data)
    {
        this.data = data;
        this.left = this.right = null;
    }
}
 
class qItem
{
    constructor(node,depth)
    {
        this.node = node;
        this.depth = depth;
    }
}
 
function minDepth(root)
{
     
    // Corner Case
    if (root == null)
        return 0;
         
    // Create an empty queue for 
    // level order traversal
    let q = [];
  
    // Enqueue Root and initialize depth as 1
    let qi = new qItem(root, 1);
    q.push(qi);
  
    // Do level order traversal
    while (q.length != 0)
    {
         
        // Remove the front queue item
        qi = q.shift();
         
        // Get details of the remove item
        let node = qi.node;
        let depth = qi.depth;
      
        // If this is the first leaf node seen so far
        // Then return its depth as answer
        if (node.left == null && node.right == null)
            return depth;
      
        // If left subtree is not null,
        // add it to queue
        if (node.left != null)
        {
            qi.node = node.left;
            qi.depth = depth + 1;
            q.push(qi);
        }
      
        // If right subtree is not null,
        // add it to queue
        if (node.right != null)
        {
            qi.node = node.right;
            qi.depth = depth + 1;
            q.push(qi);
        }
    }
    return 0;
}
 
// Driver Code
 
// Let us create binary tree shown
// in above diagram
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
 
document.write(minDepth(root));
 
// This code is contributed by rag2127








