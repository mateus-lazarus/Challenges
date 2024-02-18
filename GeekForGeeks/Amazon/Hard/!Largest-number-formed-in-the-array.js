// https://www.geeksforgeeks.org/given-an-array-of-numbers-arrange-the-numbers-to-form-the-biggest-number/






// Approach 1

// Given an array of numbers,
// program to arrange the numbers
// to form the largest number
 
// A comparison function which 
// is used by sort() function in
// printLargest()
 
function myCompare(X, Y)
{
    // // first append Y at the end of X
    let XY = X + Y;
 
    // // then append X at the end of Y
    let YX = Y + X;
 
    // // Now see which of the two 
    // // formed numbers is greater
    return (YX - XY)
}
 
// The main function that prints 
// the arrangement with the
// largest value. The function 
// accepts a vector of strings
 
function printLargest(arr)
{
     
    // Sort the numbers using 
    // inbuilt sort function. The
    // function uses our comparison 
    // function myCompare() to
    // compare two strings.
    arr.sort(myCompare);
    for(let i = 0; i < arr.length; i++)
    document.write(arr[i])
 
    // join method creates a string out of the array elements. 
    document.write(arr.join(""))
}
 
// Driver code
 
let arr = [];
 
// output should be 6054854654
arr.push("54");
arr.push("546");
arr.push("548");
arr.push("60");
printLargest(arr);
 
// This code is contributed by shinjanpatra


































// Approach 2 BEST OPTION

// Given an array of numbers,
// JavaScript program to arrange the numbers
// to form the largest number
 
 
// A comparison function which
// is used by sort() in
// printLargest()
function myCompare(x, y)
{
 
    let xy = x;
    let yx = y;
 
    // Count length of x and y
    let countx = 0;
    let county = 0;
 
    // Count length of X
    while (x > 0) {
        countx++;
        x = Math.floor(x / 10);
    }
 
    // Count length of Y
    while (y > 0) {
        county++;
        y = Math.floor(y / 10);
    }
 
    x = xy;
    y = yx;
 
    while (countx--)
        yx *= 10;
 
    while (county--)
        xy *= 10;
 
    // Append x to y
    yx += x;
 
    // Append y to x
    xy += y;
 
    return xy < yx;
}
 
// The main function that prints
// the arrangement with the
// largest value. The function
// accepts a vector of strings
function printLargest(arr)
{
 
    // Sort the numbers using
    // library sort function. The
    // function uses our comparison
    // function myCompare() to
    // compare two strings
    arr.sort(myCompare);
 
    for (var i = 0; i < arr.length; i++)
        process.stdout.write(arr[i].toString());
}
 
// Driver code
let arr = [];
 
// Output should be 6054854654
arr.push(54);
arr.push(546);
arr.push(548);
arr.push(60);
printLargest(arr);
 
// this code is contributed by phasing17

































// Approach 3

// JavaScriptimplementation this is to use itertools.
// permutations as coded below:
 
function largest(l) {
   let lst = [];
   l.sort(); // sort the array in ascending order
   do {
   let s = "";
   for (let i = 0; i < l.length; i++) {
   s += l[i].toString(); // convert the integer to a string
   }
   lst.push(s);
   } while (nextPermutation(l)); // get the next permutation of the array
    
   return Math.max(...lst); // find the maximum element in the array
   }
    
   function nextPermutation(arr) {
   let i = arr.length - 2;
   while (i >= 0 && arr[i] >= arr[i + 1]) {
   i--;
   }
    
   if (i < 0) {
   return false; 
   }
    
   let j = arr.length - 1;
   while (arr[j] <= arr[i]) {
   j--;
   }
    
   [arr[i], arr[j]] = [arr[j], arr[i]];
    
   let left = i + 1;
   let right = arr.length - 1;
    
   while (left < right) {
   [arr[left], arr[right]] = [arr[right], arr[left]]; 
   left++;
   right--;
   }
    
   return true; 
   }
    
   let v = [54, 546, 548, 60];
   console.log(largest(v)); // Output: 6054854654
   // This code is contributed by rutikbhosale
   


































// Approach 4





