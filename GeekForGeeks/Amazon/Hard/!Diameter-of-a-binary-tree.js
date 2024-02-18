// https://www.geeksforgeeks.org/diameter-of-a-binary-tree/










// Approach 1

// JavaScript program to find the diameter of binary tree
  
// A binary tree node
class Node{
    
   // Constructor to create a new node
   constructor(data){
     this.data = data
     this.left = null
     this.right = null
   }
  
 } 
   
 // The function Compute the "height" of a tree. Height is the
 // number of nodes along the longest path from the root node
 // down to the farthest leaf node.
 function height(node)
 {
  
     // Base Case : Tree is empty
     if(node == null)
         return 0
   
     // If tree is not empty then height = 1 + max of left
     // height and right heights
     return 1 + Math.max(height(node.left), height(node.right))
 }
   
 // Function to get the diameter of a binary tree
 function diameter(root){
   
     // Base Case when tree is empty
     if(root == null)
         return 0
   
     // Get the height of left and right sub-trees
     let lheight = height(root.left)
     let rheight = height(root.right)
   
     // Get the diameter of left and right sub-trees
     let ldiameter = diameter(root.left)
     let rdiameter = diameter(root.right)
   
     // Return max of the following tree:
     // 1) Diameter of left subtree
     // 2) Diameter of right subtree
     // 3) Height of left subtree + height of right subtree +1
     return Math.max(lheight + rheight + 1, Math.max(ldiameter, rdiameter))
  
 }
   
   
 // Driver Code
  
 // Constructed binary tree is
 //             1
 //           /   \
 //         2      3
 //       /  \
 //     4     5
   
 root = new Node(1)
 root.left = new Node(2)
 root.right = new Node(3)
 root.left.left = new Node(4)
 root.left.right = new Node(5)
   
 // Function Call
 document.write("Diameter of the given binary tree is "+diameter(root))
   
 // This code is contributed by shinjanpatra
 

































// Approach 2


// JavaScript program to find the diameter of a binary tree
// A binary tree Node
class Node{
 
   // Constructor to create a new Node
   constructor(data){
       this.data = data
       this.left = this.right = null
   }
}

// utility class to pass height object
class Height
{
   constructor()
   {
       this.h = 0
   }
}

// Optimised recursive function to find diameter
// of binary tree
function diameterOpt(root, height){

   // to store height of left and right subtree
   let lh = new Height()
   let rh = new Height()

   // base condition- when binary tree is empty
   if(root == null)
   {
       height.h = 0
       return 0
   }

    
   // ldiameter --> diameter of left subtree
   // rdiameter  --> diameter of right subtree
    
   // height of left subtree and right subtree is obtained from lh and rh
   // and returned value of function is stored in ldiameter and rdiameter
   let ldiameter = diameterOpt(root.left, lh)
   let rdiameter = diameterOpt(root.right, rh)

   // height of tree will be max of left subtree
   // height and right subtree height plus1
   height.h = Math.max(lh.h, rh.h) + 1

   // return maximum of the following
   // 1)left diameter
   // 2)right diameter
   // 3)left height + right height + 1
   return Math.max(lh.h + rh.h + 1, Math.max(ldiameter, rdiameter))
}

// function to calculate diameter of binary tree
function diameter(root){
   let height = new Height()
   return diameterOpt(root, height)
}


// Driver Code 
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)


// Constructed binary tree is 
//             1
//           /   \
//         2      3
//       /  \
//     4     5


// Function Call
document.write(diameter(root))

// This code is contributed by Shinjanpatra
































// Approach 3

// A tree node
class Node {
   constructor(data) {
       this.data = data;
       this.left = null;
       this.right = null;
   }
}

// Create a new node
function newNode(data) {
   let node = new Node(data);
   return node;
}

// Morris traversal to find the diameter of the binary tree
function findDiameter(root) {
   let ans = 0;
   let curr = root;

   while (curr != null) {
       if (curr.left == null) {
           curr = curr.right;
       } else {
           let pre = curr.left;
           while (pre.right != null && pre.right != curr) {
               pre = pre.right;
           }
           if (pre.right == null) {
               pre.right = curr;
               curr = curr.left;
           } else {
               pre.right = null;
               let leftHeight = 0, rightHeight = 0;
               let temp = curr.left;
               while (temp != null) {
                   leftHeight++;
                   temp = temp.right;
               }
               temp = curr.right;
               while (temp != null) {
                   rightHeight++;
                   temp = temp.left;
               }
               ans = Math.max(ans, leftHeight + rightHeight + 1);
               curr = curr.right;
           }
       }
   }
   return ans;
}

// Driver code to test above function
// Create the given binary tree
let root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);

// Find the diameter of the binary tree using Morris traversal
let diameter = findDiameter(root);

// Print the diameter of the binary tree
console.log("The diameter of given binary tree is " + diameter);

































