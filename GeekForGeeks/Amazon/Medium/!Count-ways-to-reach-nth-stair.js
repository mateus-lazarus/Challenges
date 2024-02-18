// https://www.geeksforgeeks.org/count-ways-reach-nth-stair/







// Approach 1



// A Javascript program to count 
// number of ways to reach 
// n'th stair when a person
// can climb 1, 2, ..m stairs 
// at a time. 
 
// A simple recursive
// function to find n'th 
// fibonacci number
function fib(n)
{
if (n <= 1)
    return n;
return fib(n - 1) + 
       fib(n - 2);
}
 
// Returns number of 
// ways to reach s'th stair
function countWays(s)
{
    return fib(s + 1);
}
 
// Driver Code
let s = 4;
document.write("Number of ways = " + countWays(s));
 
// This code is contributed
// by _saurabh_jaiswal



















// Approach 2



// A simple recursive function to find number of ways to reach the nth stair
 
function countWays(n, dp)
{
    if (n <= 1)
        return dp[n] = 1;
   
    if(dp[n] != -1 ){
        return dp[n] ;
    }
    dp[n] = countWays(n - 1, dp) + countWays(n - 2, dp);
    return  dp[n] ;
}
 
 
// Driver Code
 
let n = 4;
 let dp = new Array(n+1).fill(-1) ;
console.log("Number of ways = " + countWays(n,dp));



















// Approach 3

// A function to find number of ways to reach the nth stair
 
function countWays(n)
{
    let dp = [];
    dp[0] = 1; 
    dp[1] = 1;
    for (let i = 2; i <=n; i++)
    {
        dp[i]=dp[i-1]+dp[i-2];
    }
    return dp[n];
}
 
 
    // Driver Code
    let n=4;
    console.log("Number of ways = " + countWays(n));








// Approach 4

// JavaScript program to count the number of ways to reach at top
// When a person climbing on stairs
 
function countWays(n) {
   // declaring  two variables to store the count
   let prev = 1;
   let prev2 = 1;
   // Running for loop to count all possible ways
   for (let i = 2; i <= n; i++) {
       let curr = prev + prev2;
       prev2 = prev;
       prev = curr;
   }
   return prev;
}

let n = 4;
document.write("Number of Ways: ", countWays(n));








// Approach 5 (THE BEST)

var n;
n = 5;
 
// Here n/2 is done to count the number 2's in n
// 1 is added for case where there is no 2.
// eg: if n=4 ans will be 3.
// {1,1,1,1} set having no 2.
// {1,1,2} ans {2,2} (n/2) sets containing 2. 
document.write("Number of ways when order " + 
               "of steps does not matter is : ", 
               parseInt(1 + (n / 2)));    
 
// This code is contributed by Ankita saini






