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