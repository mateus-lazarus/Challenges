class Node { 
   constructor(value, left = null, right = null) {
     this.value = value;
     this.left  = left;
     this.right = right;
   }
 }



 function treeByLevels(rootNode)
 {
    const arrayLevels = [];
 
    const getLevelItemsRecursive = (rootNode, y) => {
       if (rootNode !== null) {
          if (arrayLevels[y] == null) {
             arrayLevels[y] = [];
          }
 
          arrayLevels[y].push(rootNode.value);
       }
 
       if (rootNode.left !== null) {
          getLevelItemsRecursive(rootNode.left, y + 1);
       }
 
       if (rootNode.right !== null) {
          getLevelItemsRecursive(rootNode.right, y + 1);
       }
    }
 
    getLevelItemsRecursive(rootNode, 0);
 
    const concatSubArraysToMainLevel = (mainArray) => {
       let subArrays = mainArray.length;
 
       while (subArrays > 0)
       {
          mainArray.push(...mainArray.shift());
          subArrays--;
       }
 
       return mainArray
    };
 
    return concatSubArraysToMainLevel(arrayLevels);
 }





const exampleRoot = new Node(1);
exampleRoot.left = new Node(2);
exampleRoot.right = new Node(3);
exampleRoot.left.left = new Node(4);
exampleRoot.left.right = new Node(5);
exampleRoot.right.left = new Node(6);
exampleRoot.right.right = new Node(7);
exampleRoot.right.right.left = new Node(14);
exampleRoot.right.right.right = new Node(15);



console.log(
   treeByLevels(exampleRoot)
);




















// BETTER SOLUTION FOUND

function treeByLevels (rootNode) {
   const queue = [rootNode];
   const values = [];
   
   while (queue.length) {
     let node = queue.shift()
     
     if (node) {
       values.push(node.value)
       queue.push(node.left)
       queue.push(node.right)
     }
   }
    return values;
 }




