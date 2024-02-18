// The fibonacci find value of index problem

// Utilizing recursion >> Time: O(targetIndex)  Space: O(array.length + 1)
// Steps:

// 1 - An array of two number and a varible to store current index outside the function

// 2 - A function that receive the target index and array and calculate the next number

// 3 - A for loop and that call itself until the index is beaten

// 4 - Return value and validate


// Part 1
const fibonacciNumbers = [0, 1];
let currentIndex = 1;

// Part 2
function CalculateFibonacciNumberFromIndex(targetIndex, array)
{
   // Add validator to upper functions, not on recursion ones!!
   if (targetIndex === 1)
   {
      return array[1];
   }

   // Part 3
   if (currentIndex < targetIndex)
   {
      let nextNumber = array[0] + array[1];
      array[0] = array[1];
      array[1] = nextNumber;

      currentIndex++;

      CalculateFibonacciNumberFromIndex(targetIndex, array);
   }

   return array[1];
}


// Part 4
console.log(
   'Test 1',
   '\nNumber Presented: ', CalculateFibonacciNumberFromIndex(4, fibonacciNumbers),
   '\nNumber Expected: ', 3,
);

console.log(
   '\n\nTest 2',
   '\nNumber Presented: ', CalculateFibonacciNumberFromIndex(53, fibonacciNumbers),
   '\nNumber Expected: ', 53316291173,
);