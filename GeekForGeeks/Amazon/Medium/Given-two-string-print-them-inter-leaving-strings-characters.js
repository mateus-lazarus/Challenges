// https://www.geeksforgeeks.org/print-all-interleavings-of-given-two-strings/



// Given 2 strings
//    All characters in both strings are different (don`t repeat)
// Example:
//    str1: 'A'   str2: 'C'
// Output:
//    ['AC', 'CA']
// 


// Steps:
//    1 - Count length of characters from given strings
//    2 - Concat strings and them change index from characters inside it (most difficult part)
//       2.1 - Maybe a string builder or something like would be nice (interpolation sounds nice)
//       2.2 - Define a way to build all possibles ways of combination
//          2.2.1 - A for loop or a while loop verifying result does not exists yet (maybe recursion)
//    3 - Print results



// Recursive function to print all interleavings of the two strings
function printInterLeavingsRecur(str1, str2, arrayOfStrings, length1, length2, iteration) 
{
 
    // Base case: If all characters of str1 and str2
    // have been included in output string, then print the output string
    if (length1 === 0 && length2 === 0) {
        console.log('Imprimindo final do join');
        console.log(arrayOfStrings.join(""));
    }
 
    // If some characters of str1 are left to be included, then include the first character from the remaining characters and recur for rest
    if (length1 !== 0) {
        arrayOfStrings[iteration] = str1[0];

        // console.log(`
        // While validating length1 !== 0:

        // Iteration: ${iteration}
        // arrayOfString[iteration] = ${str1[0]}
        // str1.slice(1) = ${str1.slice(1)}
        // arrayOfStrings = ${arrayOfStrings}
        // length1 = ${length1}
        // length2 = ${length2}
        // `);

        printInterLeavingsRecur(str1.slice(1), str2, arrayOfStrings, length1 - 1, length2, iteration + 1);
    }
 
    // If some characters of str2 are left to be included, then include the first character from the remaining characters and recur for rest
    if (length2 !== 0) {
        arrayOfStrings[iteration] = str2[0];

        // console.log(`
        // While validating length2 !== 0:

        // Iteration: ${iteration}
        // arrayOfString[iteration] = ${str1[0]}
        // str1.slice(1) = ${str1.slice(1)}
        // arrayOfStrings = ${arrayOfStrings}
        // length1 = ${length1}
        // length2 = ${length2}
        // `);

        printInterLeavingsRecur(str1, str2.slice(1), arrayOfStrings, length1, length2 - 1, iteration + 1);
    }
}
 
// Function to print all interleavings of the two strings
function printInterleavingsFromStrings(str1, str2, length1, length2) {
    // Allocate memory for the output string
    let arrayOfStrings = new Array(length1 + length2);
 
    // Print all interleavings using printIlsRecur
    printInterLeavingsRecur(str1, str2, arrayOfStrings, length1, length2, 0);
}
 
// Example usage
let str1 = "AB";
let str2 = "CD";
printInterleavingsFromStrings(str1, str2, str1.length, str2.length);



















// Approach 1 Without Comments
// Time: O(2 ^ (m+n))   Space: O(1)

function printInterLeavingsRecur(str1, str2, stringArray, length1, length2, iteration) 
{
    if (length1 === 0 && length2 === 0) {
        console.log(stringArray.join(""));
    }
 
    if (length1 !== 0) {
        stringArray[iteration] = str1[0];

        printInterLeavingsRecur(str1.slice(1), str2, stringArray, length1 - 1, length2, iteration + 1);
    }
 
    if (length2 !== 0) {
        stringArray[iteration] = str2[0];

        printInterLeavingsRecur(str1, str2.slice(1), stringArray, length1, length2 - 1, iteration + 1);
    }
}
 
function printInterleavingsFromStrings(str1, str2, length1, length2) {
    let arrayOfStrings = new Array(length1 + length2);

    printInterLeavingsRecur(str1, str2, arrayOfStrings, length1, length2, 0);
}



























// Approach 2: Using Buttom-Up Approach / Tabulation Method of Dynamic Programming

// Time: O(m * n * L)   Space: O(m * n * L)

function printInterleavings(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = new Array(m + 1).fill(null).map(() => 
    new Array(n + 1));
 
    // Base cases: If one of the strings is empty, 
    // return the other string
    for (let i = 0; i <= m; i++) {
        dp[i][0] = [str1.slice(0, i)];
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = [str2.slice(0, j)];
    }
 
    // Fill in the dynamic programming table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Append the current character of str1 to 
            // each interleaved string from previous cells
            dp[i][j] = dp[i - 1][j].map(s => s + str1[i - 1]);
 
            // Append the current character of str2 to each 
            // interleaved string from previous cells
            dp[i][j] = dp[i][j] || [];
            dp[i][j].push(...dp[i][j - 1].map(s => s + str2[j - 1]));
        }
    }
 
    // Print all interleavings
    for (const interleaved of dp[m][n]) {
        console.log(interleaved);
    }
}
