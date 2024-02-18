// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/


// Maximum value
// From subtracting value of node B from node A
// Where A and B are two nodes of the binary tree
// Where A is an ancestor of B




// Depth First Search Approach

// Time: O(numberOfNodes)     Space: O(heightOfThree)

var maxAncestorDiff = function(root) {
   let maxDiff = 0;

   const diff = (node, min, max) => {
      if (!node)
         return;

      maxDiff = Math.max(maxDiff, Math.abs(min - node.value), Math.abs(max - node.value));

      min = Math.min(min, node.value);
      max = Math.max(max, node.value);

      diff(node.left, min, max);
      diff(node.right, min, max);
   };

   diff(root, root.value, root.value);

   return maxDiff;
};












class Node {
   constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
   }
}








let newNode = new Node(8);
newNode.left = new Node(3);
newNode.left.left = new Node(1);
newNode.left.right = new Node(6);
newNode.left.right.left = new Node(4);
newNode.left.right.right = new Node(7);
newNode.right = new Node(10);
newNode.right.right = new Node(14);
newNode.right.right.right = new Node(13);



console.log(
   `
   maxAncestorDiff: ${maxAncestorDiff(newNode)}
   `
);




























// Depth First Search Approach

// Time: O(numberOfNodes)     Space: O(heightOfThree)

var maxAncestorDiff = function(root) {
   if (!root)
       return 0;
   let diff = 0;
   helper(root, root.val, root.val);
   return diff;

   function helper(root, minVal, maxVal) {
       if (!root)
           return;
       diff = Math.max(diff, Math.max(Math.abs(minVal - root.val), Math.abs(maxVal - root.val)));
       minVal = Math.min(minVal, root.val);
       maxVal = Math.max(maxVal, root.val);
       helper(root.left, minVal, maxVal);
       helper(root.right, minVal, maxVal);
   }
}








