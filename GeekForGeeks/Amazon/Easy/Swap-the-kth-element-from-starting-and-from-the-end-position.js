// Swap pointer and not data
// Given a linked list and a positive integer K
// Should K be swap from start and from end

// Example
// Input ->  [10, 5, 2, 6, 9] K=2
// Output -> [10, 6, 2, 5, 9]

function SwapPosition(list, integer)
{
   // Validate integer is 0 <= integer
   // Validate list.length >= integer

   let endIndex = list.length - integer - 1;

   if (endIndex == integer)
   {
      return list;
   }

   let tempFromStart = list[integer];
   let tempFromEnd = list[endIndex];

   list[integer] = tempFromEnd;
   list[endIndex] = tempFromStart;

   return list;
}


let linkedList = [10, 5, 2, 6, 9];


console.log(
   SwapPosition(linkedList, 2)
);
































