// Depth First Search
// Use PREORDER to search
// Steps:
//    1 - Define variables outside the function
//       1.1 - A priority queue
//    2 - A function that receives a binary tree and a target
//       2.1 - When queue is not empty, continue iterating
//       2.2 - When found, return true
//       2.3 - Add subnodes when not null
//       2.4 - If not found, return false


// 1
// 1.1
const stack = []

// 2
function DFS(node) {
   if (!node) {
      return [];
   }

   const stack = [node];
   const result = [];

   while (stack.length > 0) {
      const current = stack.pop();
      result.push(current.value);

      if (current.right) {
         stack.push(current.right);
      }

      if (current.left) {
         stack.push(current.left);
      }
   }

   return result;
}








// const stack = []

// function DFS(node, target) {
//    const stack = [];
//    stack.push(node);

//    while (stack.length > 0) {
//       const current = stack.pop();

//       if (current.value === target) {
//          return target;
//       }

//       if (current.right) {
//          stack.push(current.right);
//       }

//       if (current.left) {
//          stack.push(current.left);
//       }
//    }

//    return;
// }












// Input Data
class Node
{
   constructor(val)
   {
      this.key = val;
      this.left = null;
      this.right = null;
   }
}

let nodeInput = new Node(6);
nodeInput.right = new Node(8);
nodeInput.right.left = new Node(7);
nodeInput.right.right = new Node(10);
nodeInput.left = new Node(5);
nodeInput.left.left = new Node(3);
nodeInput.left.right = new Node(9);



// Return result
console.log(
   'Search for: ', 10,
   '\nResult: ', DFS(nodeInput, 10)
);