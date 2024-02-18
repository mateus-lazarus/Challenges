// The fibonacci sum the values until index problem


const fibonacciArray = [0, 1, 1];
let currentIndex = 1;


function SumFibonacciNumberUntilIndex(targetIndex, array)
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

      // Sum to total
      array[2] = array[2] + nextNumber;

      currentIndex++;

      SumFibonacciNumberUntilIndex(targetIndex, array);
   }
   
   return array[2];
}


console.log(
   'Test 1',
   '\nNumber Presented: ', SumFibonacciNumberUntilIndex(4, fibonacciArray),
   '\nNumber Expected: ', 7,
);

console.log(
   '\n\nTest 2',
   '\nNumber Presented: ', SumFibonacciNumberUntilIndex(11, fibonacciArray),
   '\nNumber Expected: ', 232
);
