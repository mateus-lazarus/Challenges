// https://www.geeksforgeeks.org/find-if-array-can-be-divided-into-two-subarrays-of-equal-sum/



// Approach 1

// JavaScript program to divide the array into two
    // subarrays with the same sum on removing
    // exactly one integer from the array
     
    // Utility function to print the sub-array
    function printSubArray(arr, start, end)
    {
        document.write("[ ");
        for (let i = start; i <= end; i++)
            document.write(arr[i] +" ");
        document.write("] ");
    }
       
    // Function that divides the array into 
    // two subarrays with the same sum
    function divideArray(arr, n)
    {
           
        // sum stores sum of all elements of 
        // the array
        let sum = 0;
        for (let i = 0; i < n; i++)
            sum += arr[i];
   
        // sum stores sum till previous index
        // of the array
        let sum_so_far = 0;
   
        for (let i = 0; i < n; i++)
        {
               
            // If on removing arr[i], we get
            // equals left and right half
            if (2 * sum_so_far + arr[i] == sum)
            {
                document.write("The array can be"
                 + " divided into two subarrays"
                 + " with equal sum " + "</br>" + "The two"
                 + " sets are - ");
                printSubArray(arr, 0, i - 1);
                printSubArray(arr, i + 1, n - 1);
   
                return true;
            }
            // add current element to sum_so_far
            sum_so_far += arr[i];
        }
   
        // The array cannot be divided
        document.write("The array cannot be"
          + " divided into two subarrays with "
                                + "equal sum" + "</br>");
                   
        return false;
    }
     
    let arr = [6, 2, 3, 2, 1];
    let n = arr.length;
 
    divideArray(arr, n);

































// Approach 2




































// Approach 3


































