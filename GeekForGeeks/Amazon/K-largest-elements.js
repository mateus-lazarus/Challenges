// Array of N positive integers
// K integer
// Find first K largest elements of the array

function findKBiggestNumbers(arrayOfIntegers, n, howMany)
{
   arrayOfIntegers.sort(
      (a, b) => { return b - a }
   );

   return arrayOfIntegers.slice(0, howMany);
}

console.log(
   findKBiggestNumbers([12, 5, 787, 1, 23], 3)
);