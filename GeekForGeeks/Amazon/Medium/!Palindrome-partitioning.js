// https://www.geeksforgeeks.org/palindrome-partitioning-dp-17/


// Approach 1


// Javascript code for Palindrome
// Partitioning Problem
 
// Function to Check if a substring is a palindrome
function isPalindrome(String, i, j)
{
    while (i < j)
    {
        if (String[i] != String[j])
            return false; 
             
        i++;
        j--;
    }
    return true;
}
 
// Function to find the minimum number of cuts needed
// for palindrome partitioning
function minPalPartion(String, i, j)
{
    // Base case: If the substring is empty or a palindrome,
    // no cuts needed
    if (i >= j || isPalindrome(String, i, j))
        return 0;
         
    let ans = Number.MAX_VALUE, count;
     
     
    // Iterate through all possible partitions and find the
    // minimum cuts needed
    for(let k = i; k < j; k++)
    {
        count = minPalPartion(String, i, k) +
        minPalPartion(String, k + 1, j) + 1;
        ans = Math.min(ans, count);
    }
    return ans;
}
 
// Driver code
let str = "ababbbabbababa";
 
// Find the minimum cuts needed for palindrome
// partitioning and display the result
document.write("Min cuts needed for " + 
               "Palindrome Partitioning is " + 
               minPalPartion(str, 0, str.length - 1));
















// Approach 2

// javascript Code for Palindrome Partitioning
// Problem
  
    // Returns the minimum number of cuts needed
    // to partition a string such that every
    // part is a palindrome
    function minPalPartion( str)
    {
     
        // Get the length of the string
        var n = str.length;
 
        /*
         * Create two arrays to build the solution in bottom up manner C[i][j] = Minimum
         * number of cuts needed for palindrome partitioning of substring str[i..j]
         * P[i][j] = true if substring str[i..j] is palindrome, else false Note that
         * C[i][j] is 0 if P[i][j] is true
         */
        var C = Array(n).fill().map(()=>Array(n).fill(0));
        var P =  Array(n).fill().map(()=>Array(n).fill(false));
 
        var i, j, k, L; // different looping variables
 
        // Every substring of length 1 is a palindrome
        for (i = 0; i < n; i++) {
            P[i][i] = true;
            C[i][i] = 0;
        }
 
        /*
         * L is substring length. Build the solution in bottom up manner by considering
         * all substrings of length starting from 2 to n. The loop structure is same as
         * Matrix Chain Multiplication problem ( See https://
         * www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/ )
         */
        for (L = 2; L <= n; L++) {
            // For substring of length L, set different
            // possible starting indexes
            for (i = 0; i < n - L + 1; i++) {
                j = i + L - 1; // Set ending index
 
                // If L is 2, then we just need to
                // compare two characters. Else need to
                // check two corner characters and value
                // of P[i+1][j-1]
                if (L == 2)
                    P[i][j] = (str.charAt(i) == str.charAt(j));
                else
                    P[i][j] = (str.charAt(i) == str.charAt(j)) && P[i + 1][j - 1];
 
                // IF str[i..j] is palindrome, then
                // C[i][j] is 0
                if (P[i][j] == true)
                    C[i][j] = 0;
                else {
                    // Make a cut at every possible
                    // localtion starting from i to j,
                    // and get the minimum cost cut.
                    C[i][j] = Number.MAX_VALUE;
                    for (k = i; k <= j - 1; k++)
                        C[i][j] = Math.min(C[i][j], C[i][k] + C[k + 1][j] + 1);
                }
            }
        }
 
        // Return the min cut value for complete
        // string. i.e., str[0..n-1]
        return C[0][n - 1];
    }
 
    // Driver program to test above function
     
        var str = "ababbbabbababa";
        document.write("Min cuts needed for " + "Palindrome Partitioning is " + minPalPartion(str));
 
// This code is contributed by Rajput-Ji 






















// Approach 3

// JavaScript Code for the above approach
 
function generatePalindrome(s, pal) {
   const n = s.length;

   // Initialize the palindrome matrix for single characters
   for (let i = 0; i < n; i++) {
       pal[i][i] = true;
   }

   // Iterate over different lengths of substrings
   for (let len = 2; len <= n; len++) {
       // Iterate over the starting positions of substrings of current length
       for (let i = 0; i <= n - len; i++) {
           // Calculate the ending position of the substring
           const j = i + len - 1;

           // Check if the characters at the starting and ending positions are equal
           // and if the substring between them is a palindrome or a single character
           if (s[i] === s[j] && (len === 2 || pal[i + 1][j - 1])) {
               // Mark the substring from i to j as a palindrome
               pal[i][j] = true;
           }
       }
   }
}

function minCut(s) {
   if (!s) return 0;
   const n = s.length;

   // 2D array to store whether substring [i, j] is a palindrome
   const pal = Array.from({ length: n }, () => Array(n).fill(false));

   generatePalindrome(s, pal);

   // Array to store the minimum cuts required to make substring [i, n-1] palindromic
   const minCutDp = Array(n).fill(Infinity);

   // There is no cut required for single character as it is always a palindrome
   minCutDp[0] = 0;

   // Iterate over the given string
   for (let i = 1; i < n; i++) {
       // Check if string 0 to i is a palindrome
       // Then minCut required will be 0.
       if (pal[0][i]) {
           minCutDp[i] = 0;
       } else {
           for (let j = i; j >= 1; j--) {
               // If s[i] and s[j] are equal and the inner substring [i+1, j-1]
               // is a palindrome or it has a length of 1
               if (pal[j][i]) {
                   // Update the minimum cuts required if cutting at position 'j+1' results in a smaller value
                   if (minCutDp[j - 1] + 1 < minCutDp[i]) {
                       minCutDp[i] = minCutDp[j - 1] + 1;
                   }
               }
           }
       }
   }

   // Return the minimum cuts required for the entire string 's'
   return minCutDp[n - 1];
}

const str = "abbac";
const cuts = minCut(str);
document.write("Minimum cuts required:", cuts);

// This code is contributed by Abhinav Mahajan (abhinav_m22)









