// https://www.geeksforgeeks.org/flattening-a-linked-list/

// Flattening a Linked List

// Linked List of Linked Lists [ [] ]
// All lists are sorted
// And result should be sorted too

// A great lecture about the problem: https://takeuforward.org/data-structure/flattening-a-linked-list/



// Approach Merge Sort WITH COMMENTS
// Time: O(numberOfTotalNodes)      Space: O(1)


class Node
{
   constructor(value)
   {
      this.value = value;
      this.next = null;
      this.bottom = null;
   }
}

function mergeTwoLists(node1, node2)
{
   let temp = new Node(0);
   let res = temp;

   while (node1 != null && node2 != null)
   {
      if (node1.value < node2.value) {
         temp.bottom = node1;
         temp = temp.bottom;
         node1 = node1.bottom;
      }
      else {
         temp.bottom = node2;
         temp = temp.bottom;
         node2 = node2.bottom;
      }
   }

   if (node1) {
      temp.bottom = node1;
   }
   else {
      temp.bottom = node2;
   }

   return res.bottom;
}


function flatten(root)
{
   if (root === null || root.next === null) {
      return root;
   }

   // Recur for list on right
   root.next = flatten(root.next);

   // Now merge
   root = mergeTwoLists(root, root.next);

   // Return the root
   // It will be in turn merged with its left
   return root
}
















// Approach Merge Sort WITHOUT COMMENTS
// Time: O(numberOfTotalNodes)      Space: O(1)


function flatten(root)
{
   if (root === null || root.next === null)
      return root;

   root.next = flatten(root.next);

   root = mergeTwoLists(root, root.next);

   return root
}