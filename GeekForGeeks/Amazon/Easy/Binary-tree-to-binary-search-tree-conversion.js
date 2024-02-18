// Binary Tree to Binary Search Tree
// 
// Input:
//             10
//          2     7
//       8  4
//
// Output:
//             8
//          4     10
//       2  7
//

// Binary Search Tree definition:
// node.left < node.key
// node.right > node.key


// Steps:
// 1 - Get all node keys in list
// 2 - Arrange node keys in order to be a BST



// Definition for a binary tree node.
class Node {
   constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
   }

   static printTree(root, level = 0, prefix = 'Root: ') {
      if (root) {
         console.log(' '.repeat(level * 4) + prefix + root.key);
         if (root.left || root.right) {
            Node.printTree(root.left, level + 1, 'L--- ');
            Node.printTree(root.right, level + 1, 'R--- ');
         }
      }
   }
}

// Inorder traversal to store the nodes in an array
function inorder(root, nodes) {
   if (root === null) {
      return;
   }

   inorder(root.left, nodes);
   nodes.push(root);
   inorder(root.right, nodes);
}

// Function to construct a binary search tree from a sorted array
function constructBST(nodes, start, end) {
   if (start > end) {
      return null;
   }
   
   const mid = Math.floor((start + end) / 2);
   const root = nodes[mid];

   root.left = constructBST(nodes, start, mid - 1);
   root.right = constructBST(nodes, mid + 1, end);

   return root;
}

// Function to convert a binary tree to a binary search tree
function convertToBST(root) {
   const nodes = [];

   inorder(root, nodes);
   nodes.sort((a, b) => a.key - b.key);

   return constructBST(nodes, 0, nodes.length - 1);
}

// Function to print the inorder traversal of a binary tree in one line
function printInorder(root) {
   const result = [];

   function inorderTraversal(node) {
      if (node === null) {
         return;
      }

      inorderTraversal(node.left);
      result.push(node.key);
      inorderTraversal(node.right);
   }

   inorderTraversal(root);
   console.log(result.join(' '));
}



// Data Input
let node = new Node(1);
node.left = new Node(2);
node.left.left = new Node(4);
node.left.right = new Node(5);
node.right = new Node(3);
node.right.left = new Node(6);
node.right.left.right = new Node(8);
node.right.right = new Node(7);
node.right.right.right = new Node(9);
node.right.right.right.right = new Node(93);
node.right.right.right.right.right = new Node(92);
node.right.right.right.right.right.right = new Node(91);



const bst = convertToBST(node);
console.log("Following is Inorder Traversal of the converted BST:");
printInorder(bst);
Node.printTree(node);
Node.printTree(bst);

