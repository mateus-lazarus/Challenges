function horizontalDistanceFromRoot(root)
{
      let leftDistance = 0;
      let rightDistance = 0;

      let queueLeft = [];
      let queueRight = [];
      queueLeft.push(root);
      queueRight.push(root);

      while(queueLeft.length > 0)
      {
            let tempNode = queueLeft.shift();

            if (tempNode.left != null)
            {
                  leftDistance++;
                  queueLeft.push(tempNode.left);
            }
      }

      while(queueRight.length > 0)
      {
            let tempNode = queueRight.shift();

            if (tempNode.right != null)
            {
                  rightDistance++;
                  queueRight.push(tempNode.right);
            }
      }

      return [leftDistance, rightDistance];
}


class Node {
      constructor(val) {
            this.key = val;
            this.left = null;
            this.right = null;
      }
}


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

console.log(
      horizontalDistanceFromRoot(node)
);



















function horizontalDistanceFromRoot(root)
{
      let leftDistance = 0;
      let rightDistance = 0;

      const queueLeft = [root];
      const queueRight = [root];

      while(queueLeft.length > 0)
      {
            let tempNode = queueLeft.shift();

            if (tempNode.left != null)
            {
                  leftDistance++;
                  queueLeft.push(tempNode.left);
            }
      }

      while(queueRight.length > 0)
      {
            let tempNode = queueRight.shift();

            if (tempNode.right != null)
            {
                  rightDistance++;
                  queueRight.push(tempNode.right);
            }
      }

      return [leftDistance, rightDistance];
}