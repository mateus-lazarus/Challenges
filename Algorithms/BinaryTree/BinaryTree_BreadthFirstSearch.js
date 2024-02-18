// Breadth First Search 
//    Use LEVEL ORDER to search
//    Steps:
//       1 - Create variables outside function
//          1.1 - A queue (array in javascript) to search in level order
//          1.2 - Maybe it will need a matrix (array of arrays) ??
//       2 - A function that receives a tree and a integer target
//          2.1 - While queue not empty, continue searching
//          2.2 - When found, return node
//          2.3 - If not found, return null



// 1
// 1.1
let stack = [];


// 2
function BFS(node, target)
{
   stack.push(node);

   // 2.1
   while(stack.length > 0)
   {
      tempNode = stack.shift();

      // 2.2
      if (tempNode.key === target)
         return tempNode.key;

      if (tempNode.left !== null) 
         stack.push(tempNode.left);

      if (tempNode.right !== null) 
         stack.push(tempNode.right);
   }

   // 2.3
   console.log('Not found on given tree!');
   return;
}




// const queue = [];

// function BFS(node, target)
// {
//    queue.push(node);

//    while(queue.length > 0)
//    {
//       tempNode = queue.shift();

//       if (tempNode.key === target) 
//          return tempNode.key;

//       if (tempNode.left !== null) 
//          queue.push(tempNode.left);

//       if (tempNode.right !== null) 
//          queue.push(tempNode.right);
//    }

//    console.log('Not found on given tree!');
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
   '\nResult: ', BFS(nodeInput, 10)
);