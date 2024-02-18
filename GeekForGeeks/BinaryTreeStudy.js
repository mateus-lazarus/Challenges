function solution(arr, n) {
  var maximum = 0;
 
  // Find the maximum element
  for (i = 0; i < n; i++) {
      maximum = Math.max(maximum, arr[i]);
  }

  // Hashing array
  var hash = Array(maximum + 1).fill(0);

  for (i = 0; i < n; i++)
  {
    hash[arr[i]]++;
  }

  console.log(
    `
    ${maximum}
    ${hash}
    ${hash.length}
    `
  )
}

// console.log(
//   solution([3, 4, 5, 6, 7, 10, 5], 7),
//   Math.sqrt(3 * 3 + 7 * 7),
//   parseInt(Math.sqrt(3 * 3 + 7 * 7))
// );

class Node {
  constructor(val) {
      this.key = val;
      this.left = null;
      this.right = null;
  }
}

// Root of Binary Tree
var root = null;
   
// Given a binary tree, print its nodes in inorder
function printInorder(node) {
  if (node == null)
      return;

  // First recur on left child */
  printInorder(node.left);

  // Then print the data of node
  console.log(node.key + " ");

  // Now recur on right child
  printInorder(node.right);
}

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

function printLeaves(node)
{
    if (node == null)
        return;

    printLeaves(node.left);
    // Print it if it is a leaf node
    if (node.left == null && node.right == null)
        console.log(node.key + " ");
    printLeaves(node.right);
}

// A function to print all left boundary nodes, 
// except a leaf node.
// Print the nodes in TOP DOWN manner
function printBoundaryLeft(node)
{
    if (node == null)
        return;

    if (node.left != null) {
        // to ensure top down order, print the node
        // before calling itself for left subtree
        console.log(node.key + " ");
        printBoundaryLeft(node.left);
    }
    else if (node.right != null) {
        console.log(node.key + " ");
        printBoundaryLeft(node.right);
    }

    // do nothing if it is a leaf node, this way we avoid
    // duplicates in output
}

// A function to print all right boundary nodes, 
// except a leaf node
// Print the nodes in BOTTOM UP manner
function printBoundaryRight(node)
{
    if (node == null)
        return;

    if (node.right != null) {
        // to ensure bottom up order, first call for right
        // subtree, then print this node
        printBoundaryRight(node.right);
        console.log(node.key + " ");
    }
    else if (node.left != null) {
        printBoundaryRight(node.left);
        console.log(node.key + " ");
    }
    // do nothing if it is a leaf node, this way we avoid
    // duplicates in output
}

// A function to do boundary traversal of a given binary tree
function printBoundary(node)
{
    if (node == null)
        return;

    console.log(node.key + " ");

    // Print the left boundary in top-down manner.
    printBoundaryLeft(node.left);

    // Print all leaf nodes
    printLeaves(node.left);
    printLeaves(node.right);

    // Print the right boundary in bottom-up manner
    printBoundaryRight(node.right);
}

function diagonalPrint(root){
  if(root == null) return;
  
  let result = [];

  q = [];
  q.push(root);
   
  while(q.length > 0){
      let size = q.length;
      answer = [];
       
      while(size--){
          let temp = q.shift();
           
          // traversing each component
          while(temp != null){
              answer.push(temp.key);
               
              if(temp.left != null)
                  q.push(temp.left);
               
              temp = temp.right;
          }
      }
      result.push(answer);
  }

  for(let i = 0; i < result.length; i++){
    let diagonal = [];

    for(let j = 0; j < result[i].length; j++){
      diagonal.push(result[i][j]);
    }

    console.log(diagonal);
  }
}




// Driver method 
   
  exampleRoot = new Node(1);
  exampleRoot.left = new Node(2);
  exampleRoot.right = new Node(3);
  exampleRoot.left.left = new Node(4);
  exampleRoot.left.right = new Node(5);
  exampleRoot.right.left = new Node(6);
  exampleRoot.right.right = new Node(7);
  exampleRoot.right.right.left = new Node(14);
  exampleRoot.right.right.right = new Node(15);

  console.log("Inorder traversal of binary tree is ");
  printInorder(exampleRoot);
  console.log("Preorder traversal of binary tree is ");
  printPreorder(exampleRoot);
  console.log("Postorder traversal of binary tree is ");
  printPostorder(exampleRoot);
  console.log("Level order traversal of binary tree is ");
  printLevelOrder(exampleRoot);
  console.log("Boundary order traversal of binary tree is ");
  printLeaves(exampleRoot);
  console.log("Diagonal order traversal of binary tree is ");
  diagonalPrint(exampleRoot);