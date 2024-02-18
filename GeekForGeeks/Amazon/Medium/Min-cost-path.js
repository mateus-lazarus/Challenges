// https://www.geeksforgeeks.org/min-cost-path-dp-6/


// Cost Matrix cost[][]
// Minimum cost path to reach (M, N) from (0, 0)

// Path finding

// Javascript program for Dynamic Programming implementation
// of Min Cost Path problem



// First Approach: Dynamic Programming With Comments
// Time: O(Height * Length) Space: O(Height * Length)

function minCost(map, target_height, target_length)
{
   let curr_row, curr_column;
   let TwoDArray = new Array(target_height + 1);   // Uses "+1" because index start from 0

   for(let curr_h = 0; curr_h < target_height + 1; curr_h++)
   {
      TwoDArray[curr_h] = new Array(target_length + 1);  // Uses "+1" because index start from 0
   }

   TwoDArray[0][0] = map[0][0];

   /* Initialize first column of total cost (tc) array */
   for (curr_row = 1; curr_row <= target_height; curr_row++)
   {
      TwoDArray[curr_row][0] = TwoDArray[curr_row-1][0] + map[curr_row][0];
   }

   console.log('Table after first column filled out');
   console.table(TwoDArray);

   /* Initialize first row of total cost (tc) array */
   for (curr_column = 1; curr_column <= target_length; curr_column++)
   {
      TwoDArray[0][curr_column] = TwoDArray[0][curr_column-1] + map[0][curr_column];
   }

   console.log('Table after first row filled out');
   console.table(TwoDArray);

   // HERE COMES THE MAGIC
   // https://www.youtube.com/watch?v=t1shZ8_s6jc


   /* Construct rest of the total cost (tc) array */
   for (curr_row = 1; curr_row <= target_height; curr_row++)
   {
      for (curr_column = 1; curr_column <= target_length; curr_column++)
      {
         // It is considering the diagonal option
         // to use only up and left, just delete it :)

         let minNextStep = Math.min(
            TwoDArray[curr_row-1][curr_column-1],  // diagonal                      
            TwoDArray[curr_row-1][curr_column],    // top
            TwoDArray[curr_row][curr_column-1]     // left
         )

         TwoDArray[curr_row][curr_column] = minNextStep + map[curr_row][curr_column];
      }
   }

   return [TwoDArray, TwoDArray[target_height][target_length]];
   // return TwoDArray[target_height][target_length];
}

let matrixMap = [
   [1, 3, 5],
   [2, 1, 2],
   [4, 3, 1]
];

console.log('Initial Table');
console.table(
   matrixMap
);

let result = minCost(matrixMap, 1, 1)

console.log('Final Table');
console.table(
   result[0]
);

console.log('Final Result');
console.log(
   result[1]
);




























// Seconds Approach: Dynamic Programming Without Comments
// Time: O(Height * Length) Space: O(Height * Length)

function minCost(map, target_height, target_length)
{
   let curr_row, curr_column;
   let TwoDArray = new Array(target_height + 1);

   for(let curr_h = 0; curr_h < target_height + 1; curr_h++)
   {
      TwoDArray[curr_h] = new Array(target_length + 1);
   }

   TwoDArray[0][0] = map[0][0];

   for (curr_row = 1; curr_row <= target_height; curr_row++)
   {
      TwoDArray[curr_row][0] = TwoDArray[curr_row-1][0] + map[curr_row][0];
   }

   for (curr_column = 1; curr_column <= target_length; curr_column++)
   {
      TwoDArray[0][curr_column] = TwoDArray[0][curr_column-1] + map[0][curr_column];
   }

   for (curr_row = 1; curr_row <= target_height; curr_row++)
   {
      for (curr_column = 1; curr_column <= target_length; curr_column++)
      {
         let minNextStep = Math.min(
            TwoDArray[curr_row-1][curr_column-1],                 
            TwoDArray[curr_row-1][curr_column],
            TwoDArray[curr_row][curr_column-1]
         )

         TwoDArray[curr_row][curr_column] = minNextStep + map[curr_row][curr_column];
      }
   }

   return TwoDArray[target_height][target_length];
}












// Seconds Approach: Dynamic Programming With Space Optimized
// Time: O(Height * Length) Space: O(1)

function minCost(matrix, target_row, target_column) 
{ 
  // for 1st column 
  for (i = 1; i < target_row; i++)
  { 
    matrix[i][0] += matrix[i - 1][0]; 
  } 
 
  // for 1st row 
  for (j = 1; j < target_column; j++)
  { 
    matrix[0][j] += matrix[0][j - 1]; 
  } 
 
  // for rest of the 2d matrix 
  for (i = 1; i < target_row; i++) 
  { 
    for (j = 1; j < target_column; j++) 
    { 
      matrix[i][j] += Math.min(
         matrix[i - 1][j - 1],
         matrix[i - 1][j],
         matrix[i][j - 1]
      );
    } 
  } 
 
  return matrix[target_row - 1][target_column - 1];
}





// There is too Dijkstra’s Algorithm to find shortest path

