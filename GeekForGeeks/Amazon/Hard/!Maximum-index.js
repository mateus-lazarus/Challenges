// https://www.geeksforgeeks.org/given-an-array-arr-find-the-maximum-j-i-such-that-arrj-arri/




// Approach 1

// JavaScript program for the above approach
 
/* For a given array arr[],
returns the maximum j – i such
that arr[j] > arr[i] */
function maxIndexDiff(arr, n)
{
    let maxDiff = -1;
    let i, j;
 
    for (i = 0; i < n; ++i) 
    {
        for (j = n - 1; j > i; --j)
        {
            if (arr[j] > arr[i] && maxDiff < (j - i))
                maxDiff = j - i;
        }
    }
 
    return maxDiff;
}
 
    // Driver code
    let arr = [ 9, 2, 3, 4, 5, 6, 7, 8, 18, 0 ];
    let n = arr.length;
    let maxDiff = maxIndexDiff(arr, n);
    document.write(maxDiff);
 
// This code is contributed by Manoj.
































// Approach 2


// Javascript program to implement
    // the above approach
       
    // For a given array []arr,
    // calculates the maximum j – i
    // such that arr[j] > arr[i]
     
    let v = [34, 8, 10, 3, 2, 80, 30, 33, 1];
    let n = v.length;
    let maxFromEnd = new Array(n + 1);
 
    for (let i = 0; i < maxFromEnd.length; i++)
      maxFromEnd[i] = Number.MIN_VALUE;
 
    // Create an array maxfromEnd
    for (let i = v.length - 1; i >= 0; i--)
    {
      maxFromEnd[i] = Math.max(maxFromEnd[i + 1], v[i]);
    }
 
    let result = 0;
 
    for (let i = 0; i < v.length; i++)
    {
      let low = i + 1, high = v.length - 1, ans = i;
 
      while (low <= high)
      {
        let mid = parseInt((low + high) / 2, 10);
 
        if (v[i] <= maxFromEnd[mid])
        {
          // We store this as current
          // answer and look for further
          // larger number to the right side
          ans = Math.max(ans, mid);
          low = mid + 1;
        }
        else
        {
          high = mid - 1;
        }
      }
 
      // Keeping a track of the
      // maximum difference in indices
      result = Math.max(result, ans - i);
    }
    document.write(result);

































// Approach 3

// JavaScript implementation of
// the hashmap approach
  
// Function to find maximum
// index difference
function maxIndexDiff(arr,n)
{
    
    // Initialise map in JavaScript
    let hashmap = new Map()
  
    // Iterate from 0 to n - 1
    for (let i = 0; i < n; i++) {
     
        hashmap[arr[i]] = hashmap[arr[i]] || []
        hashmap[arr[i]].push(i)
     
    }
  
    // Sort arr
    arr.sort((a,b)=> (a - b))
 
    let maxDiff = 0
    let temp = n
    
    // Iterate from 0 to n - 1
    for (let i = 0; i < n; i++) {
 
        if (temp > hashmap[arr[i]][0]) {
            temp = hashmap[arr[i]][0]
        }
        maxDiff = Math.max( maxDiff,hashmap[arr[i]][hashmap[arr[i]].length - 1]- temp )
 
    }
    return maxDiff
}
  
// Driver Code
 
let n = 9
const arr = [ 34, 8, 10, 3, 2, 80, 30, 33, 1 ]
  
// Function Call
let ans = maxIndexDiff(arr, n)
document.write(`The maxIndexDiff is : ${ans}`)
  
 // This code is contributed by shinjanpatra




































// Approach 4 THE BEST

// Javascript program to find the maximum
    // j – i such that arr[j] > arr[i]
     
    // Utility Functions to get max
    // and minimum of two integers
    function max(x, y)
    {
        return x > y ? x : y;
    }
  
    function min(x, y)
    {
        return x < y ? x : y;
    }
  
    // For a given array arr[], returns
    // the maximum j-i such thatarr[j] > arr[i]
    function maxIndexDiff(arr, n)
    {
        let maxDiff;
        let i, j;
  
        let RMax = new Array(n);
        let LMin = new Array(n);
  
        // Construct LMin[] such that LMin[i]
        // stores the minimum value
        // from (arr[0], arr[1], ... arr[i])
        LMin[0] = arr[0];
        for (i = 1; i < n; ++i)
            LMin[i] = min(arr[i], LMin[i - 1]);
  
        // Construct RMax[] such that
        // RMax[j] stores the maximum value
        // from (arr[j], arr[j+1], ..arr[n-1])
        RMax[n - 1] = arr[n - 1];
        for (j = n - 2; j >= 0; --j)
            RMax[j] = max(arr[j], RMax[j + 1]);
  
        // Traverse both arrays from left
        // to right to find optimum j - i
        // This process is similar to merge()
        // of MergeSort
        i = 0;
        j = 0;
        maxDiff = -1;
        while (j < n && i < n) {
            if (LMin[i] <= RMax[j]) {
                maxDiff = max(maxDiff, j - i);
                j = j + 1;
            }
            else
                i = i + 1;
        }
  
        return maxDiff;
    }
     
    let arr = [ 9, 2, 3, 4, 5, 6, 7, 8, 18, 0 ];
    let n = arr.length;
    let maxDiff = maxIndexDiff(arr, n);
    document.write(maxDiff);










