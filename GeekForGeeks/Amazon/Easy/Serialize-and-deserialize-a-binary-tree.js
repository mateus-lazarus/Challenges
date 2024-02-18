// Print vertically binary tree

function verticalTraversal(root)
{
      // Coordinates X (horizontal) and Y (vertical)
      // When Y = 2, X = 1 to be on the same vertical that the root
      // Root : Y = 1, X = 0

      let Y = 1;
      let X = 0;
      let map = new Map();

      let queue = [];
      queue.push([root, Y, X]);

      while(queue.length > 0)
      {
            let temp = queue.shift();
            let tempNode = temp[0];
            Y = temp[1];
            X = temp[2];

            if (!map.has(`${X}`))
            {
                  map[`${X}`] = [];
            }

            map[`${X}`].push(tempNode.key);

            if (tempNode.left != null)
            {
                  queue.push([tempNode.left, Y + 1, X - 1]);
            }

            if (tempNode.right != null)
            {
                  queue.push([tempNode.right, Y + 1, X + 1]);
            }
      }

      return map;
}

function printVerticalTree(root, length, minDistance)
{
      let solution = verticalTraversal(root);

      for (let index = minDistance; index < length; index++)
      {
            console.dir(
                  solution[index]
            );
      }
}












// Needed Class
class Node {
      constructor(val) {
            this.key = val;
            this.left = null;
            this.right = null;
      }
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



printVerticalTree(node, 7, -2);























