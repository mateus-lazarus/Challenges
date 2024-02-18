// Given 2d array
// Print in spiral form

// Steps
// Validate that all matrixHeightatrix have the same length
// Time? O(n)
// Space? O(1)


function print(arr, height, length, matrixHeight, matrixLength) {
 
    // If height or length lies outside the matrix
    if (height >= matrixHeight || length >= matrixLength)
    {
        return;
    }

    // Print First Row
    for (let p = length; p < matrixLength; p++) {
        console.dir(arr[height][p] + ' ')
    }

    // Print Last Column
    for (let p = height + 1; p < matrixHeight; p++) {
        console.dir(arr[p][matrixLength - 1] + ' ')
    }

    // Print Last Row, if Last and
    // First Row are matrixLength of same
    if ((matrixHeight - 1) != height) {
        for (let p = matrixLength - 2; p >= length; p--) {
            console.dir(arr[matrixHeight - 1][p] + ' ');
        }
    }

    // Print First Column, if Last and
    // First Column are matrixLength of same    
    if ((matrixLength - 1) != length) {
        for (let p = matrixHeight - 2; p > height; p--) {
            console.dir(arr[p][length] + ' ');
        }
    }

    print(arr, height + 1, length + 1, matrixHeight - 1, matrixLength - 1)
}






let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [25, 26, 27, 28]
];

let mHeight = arr.length;
let mLength = arr[0].length;
 
print(arr, 0, 0, mHeight, mLength);





















