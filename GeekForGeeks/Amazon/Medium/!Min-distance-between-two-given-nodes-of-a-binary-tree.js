// https://www.geeksforgeeks.org/find-distance-between-two-nodes-of-a-binary-tree/

// Find distance between two nodes of a Binary Tree


class Node
{
   constructor(key) {
      this.left = null;
      this.right = null;
      this.key = key;
   }
}







// Approach: Lowest Common Ancestor Post WITH COMMENTS
// Time: O(Nodes)     Space: O(Height) 


// Global variable to store distance between n1 and n2.
let distance = 0;
 
// Function that finds distance between two node.
function findDistanceRecur(root, n1, n2) {
   if (!root)
      return 0;

   let left = findDistanceRecur(root.left, n1, n2);
   let right = findDistanceRecur(root.right, n1, n2);
 
   // if any node(n1 or n2) is found
   if (root.key === n1 || root.key === n2) {
      // check if there is any descendant(n1 or n2)
      // if descendant exist then distance between descendant and current root will be our answer.
      if (left || right) {
         distance = Math.max(left, right);
         return 0;
      } else {
         return 1;
      }
   }

   // if current root is LowestCommonAncestor(LCA) of n1 and n2.
   else if (left && right) {
      distance = left + right;
      return 0;
   }

   // if there is a descendant(n1 or n2).
   else if (left || right) {
      // increment its distance
      return Math.max(left, right) + 1;
   }

   // if neither n1 nor n2 exist as descendant.
   return 0;
}
 
// The main function that returns distance between n1 and n2.
function findDistanceBetweenNodes(root, n1, n2) {
   findDistanceRecur(root, n1, n2);

   return distance;
}




// Driver program 
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
// root.right.left.right = new Node(8);
console.log("Dist(4, 5) = ", findDistanceBetweenNodes(root, 4, 5));
console.log("Dist(4, 6) = ", findDistanceBetweenNodes(root, 4, 6));
console.log("Dist(3, 4) = ", findDistanceBetweenNodes(root, 3, 4));
console.log("Dist(2, 4) = ", findDistanceBetweenNodes(root, 2, 4));
// console.log("Dist(8, 5) = ", findDistanceBetweenNodes(root, 8, 5));





















// Approach: Lowest Common Ancestor Post WITHOUT COMMENTS
// Time: O(Nodes)     Space: O(Height) 


let distance = 0;
 
function findDistanceRecur(root, n1, n2) {
   if (!root)
      return 0;

   let left = findDistanceRecur(root.left, n1, n2);
   let right = findDistanceRecur(root.right, n1, n2);
 
   if (root.key === n1 || root.key === n2) {
      if (left || right) {
         distance = Math.max(left, right);
         return 0;
      } else
         return 1;
   }

   else if (left && right) {
      distance = left + right;
      return 0;
   }

   else if (left || right)
      return Math.max(left, right) + 1;

   return 0;
}
 
function findDistanceBetweenNodes(root, n1, n2) {
   findDistanceRecur(root, n1, n2);
   
   return distance;
}