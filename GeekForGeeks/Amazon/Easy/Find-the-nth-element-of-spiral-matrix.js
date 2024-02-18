// Array of N integers
// Maximum that maximizes the sum of the value i * array[i]
// Where i => 0 < i <= n - 1


function maxSumRotation(arr) {
   const n = arr.length;
 
   // Find the sum of the array and the product of i*arr[i]
   let arraySum = 0;
   let currVal = 0;

   for (let i = 0; i < n; i++)
   {
     arraySum += arr[i];
     currVal += i * arr[i];

     console.log(
      `
      ${arraySum}
      ${currVal}`
     )
   }
 
   // Initialize the result with the product of 0*arr[0]
   let maxVal = currVal;
 
   // Compute the values of i*arr[i] for each rotation and update maxVal
   for (let j = 1; j < n; j++)
   {
      console.log(
         `
         currVal: ${currVal}
         arraySum: ${arraySum}
         n, j: ${n}, ${j}
         array: [${arr}]
         n * arr[n - j]: ${n * arr[n - j]}
         new currVal: ${currVal + arraySum - n * arr[n - j]}`
      );

      currVal = currVal + arraySum - n * arr[n - j];

      maxVal = Math.max(maxVal, currVal);
   }
 
   return maxVal;
}
 
 // Example usage:
 const arr = [1, 8, 2, 3];
 const result = maxSumRotation(arr);
 console.log("Maximum sum of i*arr[i] among all rotations:", result);













































